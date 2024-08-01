// src/mockData.js
import { faker } from '@faker-js/faker';

// 生成假天气数据
export const generateFakeWeatherData = () => ({
  Temperature: { Metric: { Value: faker.datatype.number({ min: 15, max: 35 }) } },
  WeatherText: faker.word.adjective(),  // 更正为faker.word.adjective()
  Wind: { Speed: { Metric: { Value: faker.datatype.number({ min: 0, max: 20 }) } } },
  Visibility: { Metric: { Value: faker.datatype.number({ min: 1, max: 20 }) } },
  UVIndex: faker.datatype.number({ min: 1, max: 10 }),
  RelativeHumidity: faker.datatype.number({ min: 30, max: 90 })
});

// 生成假小时预报数据
export const generateFakeHourlyForecast = () => (
  Array.from({ length: 12 }, (_, index) => ({
    DateTime: faker.date.recent().toISOString(),
    Temperature: { Value: faker.datatype.number({ min: 15, max: 35 }) },
    IconPhrase: faker.word.adjective()  // 添加IconPhrase
  }))
);

// 生成假天预报数据
export const generateFakeDailyForecast = () => (
  Array.from({ length: 5 }, (_, index) => ({
    Date: faker.date.future().toISOString(),
    Day: {
      Icon: faker.datatype.number({ min: 1, max: 10 }),
      IconPhrase: faker.word.adjective()  // 更正为faker.word.adjective()
    },
    Temperature: {
      Maximum: { Value: faker.datatype.number({ min: 20, max: 35 }) },
      Minimum: { Value: faker.datatype.number({ min: 10, max: 25 }) }
    }
  }))
);