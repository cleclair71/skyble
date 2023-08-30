export const weatherConditions = {
  Rain: {
    color: '#005BEA',
    title: 'Raining',
    subtitle: 'Get a cup of coffee',
    icon: 'weather-rainy',
    backgroundImage: {
      summer: {
        day: require('../assets/images/background/summer/day/rain.jpg'),
        night: require('../assets/images/background/summer/night/rain.jpg')
      },
      winter: {
        day: require('../assets/images/background/winter/day/rain.jpg'),
        night: require('../assets/images/background/winter/night/rain.jpg')
      },
      spring: {
        day: require('../assets/images/background/spring/day/rain.jpg'),
        night: require('../assets/images/background/spring/night/rain.jpg')
      },
      fall: {
        day: require('../assets/images/background/fall/day/rain.jpg'),
        night: require('../assets/images/background/fall/night/rain.jpg')
      }
    }
  },
    Clear: {
      color: '#f7b733',
      title: 'So Sunny',
      subtitle: 'It is hurting my eyes',
      icon: 'weather-sunny',
      backgroundImage: {
        summer: {
          day: require('../assets/images/background/summer/day/clear.jpg'),
          night: require('../assets/images/background/summer/night/clear.jpg')
        },
        winter: {
          day: require('../assets/images/background/winter/day/clear.jpg'),
          night: require('../assets/images/background/winter/night/clear.jpg')
        },
        spring: {
          day: require('../assets/images/background/spring/day/clear.jpg'),
          night: require('../assets/images/background/spring/night/clear.jpg')
        },
        fall: {
          day: require('../assets/images/background/fall/day/clear.jpg'),
          night: require('../assets/images/background/fall/night/clear.jpg')
        }
      }
    },
    Thunderstorm: {
      color: '#616161',
      title: 'A Storm is coming',
      subtitle: 'Because Gods are angry',
      icon: 'weather-lightning',
      backgroundImage: {
        summer: {
          day: require('../assets/images/background/summer/day/storm.jpg'),
          night: require('../assets/images/background/summer/night/storm.jpg')
        },
        winter: {
          day: require('../assets/images/background/winter/day/storm.jpg'),
          night: require('../assets/images/background/winter/night/storm.jpg')
        },
        spring: {
          day: require('../assets/images/background/spring/day/storm.jpg'),
          night: require('../assets/images/background/spring/night/storm.jpg')
        },
        fall: {
          day: require('../assets/images/background/fall/day/storm.jpg'),
          night: require('../assets/images/background/fall/night/storm.jpg')
        }
      }
    },
    Clouds: {
      color: '#1F1C2C',
      title: 'Clouds',
      subtitle: 'Everywhere',
      icon: 'weather-cloudy',
      backgroundImage: {
        summer: {
          day: require('../assets/images/background/summer/day/cloudy.jpg'),
          night: require('../assets/images/background/summer/night/cloudy.jpg')
        },
        winter: {
          day: require('../assets/images/background/winter/day/cloudy.jpg'),
          night: require('../assets/images/background/winter/night/cloudy.jpg')
        },
        spring: {
          day: require('../assets/images/background/spring/day/cloudy.jpg'),
          night: require('../assets/images/background/spring/night/cloudy.jpg')
        },
        fall: {
          day: require('../assets/images/background/fall/day/cloudy.jpg'),
          night: require('../assets/images/background/fall/night/cloudy.jpg')
        }
      }
    },
  
    Snow: {
      color: '#00d2ff',
      title: 'Snow',
      subtitle: 'Get out and build a snowman for me',
      icon: 'weather-snowy',
      backgroundImage: {
        summer: {
          day: require('../assets/images/background/fall/day/snow.jpg'),
          night: require('../assets/images/background/fall/night/snow.jpg')
        },
        winter: {
          day: require('../assets/images/background/winter/day/snow.jpg'),
          night: require('../assets/images/background/winter/night/snow.jpg')
        },
        spring: {
          day: require('../assets/images/background/fall/day/snow.jpg'),
          night: require('../assets/images/background/fall/night/snow.jpg')
        },
        fall: {
          day: require('../assets/images/background/fall/day/snow.jpg'),
          night: require('../assets/images/background/fall/night/snow.jpg')
        }
      }
    },
    Drizzle: {
      color: '#076585',
      title: 'Drizzle',
      subtitle: 'Partially raining...',
      icon: 'weather-hail',
      backgroundImage: {
        summer: {
          day: require('../assets/images/background/summer/day/drizzle.jpg'),
          night: require('../assets/images/background/summer/night/rain.jpg')
        },
        winter: {
          day: require('../assets/images/background/winter/day/rain.jpg'),
          night: require('../assets/images/background/winter/night/rain.jpg')
        },
        spring: {
          day: require('../assets/images/background/spring/day/rain.jpg'),
          night: require('../assets/images/background/spring/night/rain.jpg')
        },
        fall: {
          day: require('../assets/images/background/fall/day/rain.jpg'),
          night: require('../assets/images/background/fall/night/rain.jpg')
        }
      }
    },
    Haze: {
      color: '#66A6FF',
      title: 'Haze',
      subtitle: 'Another name for Partial Raining',
      icon: 'weather-hail',
      backgroundImage: {
        summer: {
          day: require('../assets/images/background/summer/day/rain.jpg'),
          night: require('../assets/images/background/summer/night/rain.jpg')
        },
        winter: {
          day: require('../assets/images/background/winter/day/rain.jpg'),
          night: require('../assets/images/background/winter/night/rain.jpg')
        },
        spring: {
          day: require('../assets/images/background/spring/day/rain.jpg'),
          night: require('../assets/images/background/spring/night/rain.jpg')
        },
        fall: {
          day: require('../assets/images/background/fall/day/rain.jpg'),
          night: require('../assets/images/background/fall/night/rain.jpg')
        }
      }
    },
    Mist: {
      color: '#3CD3AD',
      title: 'Mist',
      subtitle: "Don't roam in forests!",
      icon: 'weather-fog',
      backgroundImage: {
        summer: {
          day: require('../assets/images/background/summer/day/fog.jpg'),
          night: require('../assets/images/background/summer/night/fog.jpg')
        },
        winter: {
          day: require('../assets/images/background/winter/day/fog.jpg'),
          night: require('../assets/images/background/winter/night/fog.jpg')
        },
        spring: {
          day: require('../assets/images/background/spring/day/fog.jpg'),
          night: require('../assets/images/background/spring/night/fog.jpg')
        },
        fall: {
          day: require('../assets/images/background/fall/day/fog.jpg'),
          night: require('../assets/images/background/fall/night/fog.jpg')
        }
      }
    },
  };