import { faker } from '@faker-js/faker';

// 生成假天气数据
export const generateFakeWeatherData = () => ({
  Temperature: { Metric: { Value: faker.number.int({ min: 15, max: 35 }) } },
  WeatherText: faker.word.adjective(),
  Wind: { Speed: { Metric: { Value: faker.number.int({ min: 0, max: 20 }) } } },
  Visibility: { Metric: { Value: faker.number.int({ min: 1, max: 20 }) } },
  UVIndex: faker.number.int({ min: 1, max: 10 }),
  RelativeHumidity: faker.number.int({ min: 30, max: 90 }),
  WeatherIcon: faker.number.int({ min: 1, max: 44 }) // 新增WeatherIcon
});

// 生成假小时预报数据
export const generateFakeHourlyForecast = () => (
  Array.from({ length: 12 }, (_, index) => ({
    DateTime: faker.date.recent().toISOString(),
    Temperature: { Value: faker.number.int({ min: 15, max: 35 }) },
    IconPhrase: faker.word.adjective() 
  }))
);

// 生成假天预报数据
export const generateFakeDailyForecast = () => (
  Array.from({ length: 5 }, (_, index) => ({
    Date: faker.date.future().toISOString(),
    Day: {
      Icon: faker.number.int({ min: 1, max: 44 }), // 更新Icon生成范围
      IconPhrase: faker.word.adjective()
    },
    Temperature: {
      Maximum: { Value: faker.number.int({ min: 20, max: 35 }) },
      Minimum: { Value: faker.number.int({ min: 10, max: 25 }) }
    }
  }))
);
