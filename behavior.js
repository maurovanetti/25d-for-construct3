"use strict";

{
	const SDK = self.SDK;

	////////////////////////////////////////////
	// The behavior ID is how Construct identifies different kinds of behaviors.
	// *** NEVER CHANGE THE BEHAVIOR ID! ***
	// If you change the behavior ID after releasing the behavior, Construct will think it is an entirely different
	// behavior and assume it is incompatible with the old one, and YOU WILL BREAK ALL EXISTING PROJECTS USING THE BEHAVIOR.
	// Only the behavior name is displayed in the editor, so to rename your behavior change the name but NOT the ID.
	// If you want to completely replace a behavior, make it deprecated (it will be hidden but old projects keep working),
	// and create an entirely new behavior with a different behavior ID.
	const BEHAVIOR_ID = "maurovanetti_TwoDotFiveD";
	////////////////////////////////////////////
	
	const BEHAVIOR_VERSION = "1.0.0.0";
	const BEHAVIOR_CATEGORY = "general";
	
	const BEHAVIOR_CLASS = SDK.Behaviors.maurovanetti_TwoDotFiveD = class MyCustomBehavior extends SDK.IBehaviorBase
	{
		constructor()
		{
			super(BEHAVIOR_ID);
			
			SDK.Lang.PushContext("behaviors." + BEHAVIOR_ID.toLowerCase());
			
			this._info.SetName(self.lang(".name"));
			this._info.SetDescription(self.lang(".description"));
			this._info.SetVersion(BEHAVIOR_VERSION);
			this._info.SetCategory(BEHAVIOR_CATEGORY);
			this._info.SetAuthor("Mauro Vanetti");
			this._info.SetHelpUrl(self.lang(".help-url"));
			this._info.SetIsOnlyOneAllowed(true);
			
			SDK.Lang.PushContext(".properties");
			
			this._info.SetProperties([
				new SDK.PluginProperty("check", "locked", false),
				new SDK.PluginProperty("text", "image-point", "0"),
				new SDK.PluginProperty("float", "delta-z", 50.0)
			]);
			
			SDK.Lang.PopContext();	// .properties
			
			SDK.Lang.PopContext();
		}
	};
	
	BEHAVIOR_CLASS.Register(BEHAVIOR_ID, BEHAVIOR_CLASS);
}