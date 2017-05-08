# Speachpad Playback App

#  Features:

  - Audio player
  - Audio recorder

### Installation

requires [cordova.js](https://cordova.apache.org/) v6+ and the latest version of Xcode to run.

clone repo and move to project directory

Install the dependencies.

```sh
$ cd {pathToProject}
$ npm install
```

Rebuild platform

```sh
$ cordova platform rm ios
$ cordova platform add ios
$ cordova build ios
```

Open project in xcode `{pathToProject/platforms/ios/Speechpad\ playback.xcodeproj}`

In Xcode check your certificate:
`Project navigator > General > Signing`
check `Automatiaclly manage signing`
and  `team`

Connect your device and press play button

### Plugins

| Plugin | README |
| ------ | ------ |
| Media | https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-media/index.html

##### Media
was selected to build simple audio player and recorder using cordova native plugins



### Know isuses
`getCurrentPosition` workinkg not correct on success.
`getCurrentAmplitude` return `0` value on success.
those issuses don't allow finalize development of the prgress bar correctlly.