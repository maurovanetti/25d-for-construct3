# 2•5D addon for Construct 3

This is a simple behavior addon for the 2D-oriented game engine [Construct 3](https://construct.net/) created by Mauro Vanetti.

It introduces a new Construct 3 behavior for a very common requirement: handling the Z elevation of sprites in games with an angled top-down point of view, sometimes confusingly called 2.D games.

Sprites in such games can move in front or behind each other and this has to be adjusted dynamically. Attach the 2•5D behavior to all objects involved and they are arranged automatically.

The behavior works as expected with both Orthographic and Perspective projections, because it uses the screen Y, not the world Y, to calculate the Z elevation.

## Install it

You can download the addon from [the Addons section of the Construct 3 site](https://www.construct.net/en/make-games/addons/955/25d).

Please read [the official documentation about installing third-party addons](https://www.construct.net/en/make-games/manuals/construct-3/tips-and-guides/installing-third-party-addons).

## Try it

You can see a live example on [Mauro Vanetti's itch.io page](https://maurovanetti.itch.io/25d4c3). It runs in the browser.

The example source can also be downloaded from there.

The example projects uses a Family called 2.5D comprising all objects that require being rendered in a 2.5D way.

## Parameters

### Locked
Usually false, but you might want to lock items that do not need to update their Z elevation every tick. A typical example is static sprites in an Orthographic projection (don't lock items in a Perspective projection). Another use case is a sprite that's moving along the vertical axis but this does not represent a movement on the world plane but perpendicular to it, like a jump or a dive.

### Image point
ID or name of the image point used as a reference for the object. This is usually a point representing the base of the portrayed object, e.g. the feet of a character.

### Max Z variation
The Z elevation varies depending on the Y position of each object on the screen. Objects along the top edge of the screen get the max Z. Objects at the middle get 0. Object along the bottom edge get max Z with a negative sign. This is only relevant when using a Perspective projection, because larger Z variations translate into larger scale variations. If this value is too large, the sprites may end up being clipped out of view by the camera constraints. In order to get a consistent result, the Max Z variation should be the same for all 2.5D objects involved.
