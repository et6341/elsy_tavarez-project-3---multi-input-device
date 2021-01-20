while True:
    music.set_volume(60)
    if input.sound_level() > 150:
        light.set_all(light.rgb(255, 0, 255))
    elif input.temperature(TemperatureUnit.CELSIUS) > 36:
        music.siren.play_until_done()
    else:
        light.set_all(light.rgb(255, 255, 0))


