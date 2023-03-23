"use strict";

{
	const SDK = self.SDK;

	const BEHAVIOR_CLASS = SDK.Behaviors.maurovanetti_TwoDotFiveD;
	
	BEHAVIOR_CLASS.Type = class MyCustomBehaviorType extends SDK.IBehaviorTypeBase
	{
		constructor(sdkPlugin, iBehaviorType)
		{
			super(sdkPlugin, iBehaviorType);
		}
	};
}