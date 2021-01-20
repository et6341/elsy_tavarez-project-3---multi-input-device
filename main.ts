while (true) {
    music.setVolume(60)
    if (input.soundLevel() > 150) {
        light.setAll(light.rgb(255, 0, 255))
    } else if (input.temperature(TemperatureUnit.Celsius) > 36) {
        music.siren.playUntilDone()
    } else {
        light.setAll(light.rgb(255, 255, 0))
    }
    
}
