"use strict";

{
	const C3 = self.C3;

	C3.Behaviors.maurovanetti_TwoDotFiveD.Instance = class MyBehaviorInstance extends C3.SDKBehaviorInstanceBase
	{
		constructor(behInst, properties)
		{
			super(behInst);
			
			this._locked = false;
			this._referenceImagePoint = "0";
			this._deltaZ = 50;
			
			if (properties)
			{
				this._locked = properties[0];
				this._referenceImagePoint = properties[1];				
				this._deltaZ = properties[2];
			}						
			// Opt-in to getting calls to Tick()
			this._StartTicking();
		}

		Release()
		{
			super.Release();
		}
		
		SetLocked(b)
		{
			this._locked = b;
			if (!b) {
				this._StartTicking();
				// Forces a redraw in case the object changes its Z elevation
				this.GetRuntime().UpdateRender(); 
			}
		}

		_IsLocked()
		{
			return this._locked;
		}
		
		SaveToJson()
		{
			return {
				// data to store for savegames
			};
		}

		LoadFromJson(o)
		{
			// load state for savegames
		}
		
		Tick()
		{
			const wi = this._inst.GetWorldInfo();
			const imagePointY = this._inst._sdkInst.GetImagePoint(this._referenceImagePoint)[1];			
			const midScreenY = imagePointY - wi.GetLayout().GetScrollY();
			const k = midScreenY / (wi.GetLayer().GetViewport().height() / 2); // -1 = top, 0 = middle, +1 = bottom
			wi.SetZElevation(k * this._deltaZ);
			if (this._IsLocked()) {
				// No need to update the 2.5D perspective if the object is locked.
				// NB: Usually this means that its screen Y is fixed, not just its world position!
				this._StopTicking();
			}
		}

		GetScriptInterfaceClass()
		{
			return self.IMyBehaviorInstance;
		}
	};
	
	// Script interface for behavior instance
	const map = new WeakMap();
	
	self.IMyBehaviorInstance = class IMyBehaviorInstance extends self.IBehaviorInstance {
		constructor()
		{
			super();
			
			// Map by SDK instance
			map.set(this, self.IBehaviorInstance._GetInitInst().GetSdkInstance());
		}
		
		SetLocked(b)
		{
			map.get(this).SetLocked(b);
		}

		IsLocked()
		{
			return map.get(this)._IsLocked();
		}
	};
}