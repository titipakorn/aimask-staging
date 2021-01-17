import {Observation, Collection, CameraDetail} from '../../interfaces/marker'

// Export camera-lists method
const camLists = (observer: Observation): string[] => Object.keys(observer)

const findLastestDay = (collection: Collection) => {
  const dateLists = Object.keys(collection).map(day => parseInt(day))
  return Math.max(...dateLists).toString()
}

// Export camera-details method
export const camDetails = (observer: Observation): CameraDetail[] => {
  return camLists(observer).map(cameraID => {
    const {name, latitude, longitude, collection} = observer[cameraID]
    const lastDay = findLastestDay(collection)
    const { detect_timestamp, result } = collection[lastDay][0]
    return { name, latitude, longitude,
      collection_date: lastDay,
      detect_timestamp,
      result
    }
  })
}

// Export RAW data-format
export const observationPoint: Observation = {
  'C01': {
    name: "ตลาดทุ่งครุ",
    gpu_server: "iApp GPU 1",
    latitude: 13.64361893348543,
    longitude:  100.49966438441183,
    collection: {
      '20210112':[
        {
          detect_timestamp: "2021-01-15 18:59:15.168346",
          time_start: "080000",
          time_end: "090000",
          result: {
            total: 590,
            no_correct_wear_mask: 578,
            no_incorrect_wear_mask: 0,
            no_not_wear_mask: 12,
            percentage: 97.96610169491525
          }
        }
      ]
    }
  },
  'C02': {
    name: "แนวถนนพระราม1-1",
    gpu_server: "iApp GPU 1",
    latitude: 13.7458795,
    longitude: 100.5320718,
    collection: {
      '20210112':[
        {
          detect_timestamp: "2021-01-15 22:24:57.822239",
          time_start: "080000",
          time_end: "090000",
          result: {
            total: 41,
            no_correct_wear_mask: 41,
            no_incorrect_wear_mask: 0,
            no_not_wear_mask: 0,
            percentage: 100
          }
        },
        {
          detect_timestamp: "2021-01-15 20:25:15.312859",
          time_start: "080000",
          time_end: "090000",
          result: {
            total: 13,
            no_correct_wear_mask: 12,
            no_incorrect_wear_mask: 0,
            no_not_wear_mask: 1,
            percentage: 92.3076923076923
          }
        }
      ]
    }
  },
  'C03': {
    name: "แนวถนนพระราม1-2",
    gpu_server: "iApp GPU 1",
    latitude: 13.7458795,
    longitude: 100.5320718,
    collection: {
      '20210112':[
        {
          detect_timestamp: "2021-01-15 19:16:46.603655",
          time_start: "080000",
          time_end: "090000",
          result: {
            total: 94,
            no_correct_wear_mask: 93,
            no_incorrect_wear_mask: 1,
            no_not_wear_mask: 0,
            percentage: 98.93617021276596
          }
        }
      ]
    }
  },
  'C04': {
    name: "แนวถนนราชดำริ1",
    gpu_server: "iApp GPU 1",
    latitude: 13.7461059,
    longitude: 100.5404026,
    collection: {
      '20210112':[
        {
          detect_timestamp: "2021-01-15 20:15:09.617229",
          time_start: "080000",
          time_end: "090000",
          result: {
            total: 40,
            no_correct_wear_mask: 36,
            no_incorrect_wear_mask: 1,
            no_not_wear_mask: 3,
            percentage: 90
          }
        }
      ]
    }
  },
  'C05': {
    name: "แนวถนนราชดำริ2-1",
    gpu_server: "iApp GPU 1",
    latitude: 13.7490615,
    longitude: 100.5408839,
    collection: {
      '20210112':[
        {
          detect_timestamp: "2021-01-15 20:23:33.957300",
          time_start: "080000",
          time_end: "090000",
          result: {
            total: 222,
            no_correct_wear_mask: 202,
            no_incorrect_wear_mask: 1,
            no_not_wear_mask: 19,
            percentage: 90.990991
          }
        }
      ]
    }
  },
  'C06': {
    name: "แนวถนนราชดำริ2-2",
    gpu_server: "iApp GPU 1",
    latitude: 13.7476166,
    longitude: 100.5407992,
    collection: {
      '20210112':[
        {
          detect_timestamp: "2021-01-15 20:57:45.398782",
          time_start: "080000",
          time_end: "090000",
          result: {
            total: 124,
            no_correct_wear_mask: 122,
            no_incorrect_wear_mask: 0,
            no_not_wear_mask: 2,
            percentage: 98.38709677419355
          }
        }
      ]
    }
  },
  'C07': {
    name: "หน้าองค์การเภสัช1-1",
    gpu_server: "iApp GPU 1",
    latitude: 13.7666797,
    longitude: 100.5277578,
    collection: {
      '20210112':[
        {
          detect_timestamp: "2021-01-15 21:09:53.909248",
          time_start: "080000",
          time_end: "090000",
          result: {
            total: 64,
            no_correct_wear_mask: 62,
            no_incorrect_wear_mask: 0,
            no_not_wear_mask: 2,
            percentage: 96.875
          }
        }
      ]
    }
  },
  'C08': {
    name: "แนวถนนราชวิถี1",
    gpu_server: "iApp GPU 1",
    latitude: 13.7662817,
    longitude: 100.5351334,
    collection: {
      '20210112':[
        {
          detect_timestamp: "2021-01-15 22:17:44.851210",
          time_start: "080000",
          time_end: "090000",
          result: {
            total: 84,
            no_correct_wear_mask: 81,
            no_incorrect_wear_mask: 0,
            no_not_wear_mask: 3,
            percentage: 96.42857142857143
          }
        },
        {
          detect_timestamp: "2021-01-15 22:14:41.169141",
          time_start: "080000",
          time_end: "090000",
          result: {
            total: 5,
            no_correct_wear_mask: 5,
            no_incorrect_wear_mask: 0,
            no_not_wear_mask: 0,
            percentage: 100
          }
        }
      ]
    }
  },
  'C09': {
    name: "แนวถนนพญาไท1",
    gpu_server: "iApp GPU 1",
    latitude: 13.7620258,
    longitude: 100.5367703,
    collection: {
      '20210112':[
        {
          detect_timestamp: "2021-01-15 23:04:25.258498",
          time_start: "080000",
          time_end: "090000",
          result: {
            total: 178,
            no_correct_wear_mask: 172,
            no_incorrect_wear_mask: 0,
            no_not_wear_mask: 6,
            percentage: 96.62921348314607
          }
        }
      ]
    }
  },
}

export const currentMarkers = [
  {
  date: "2021-01-15 18:59:15.168346",
  gpu_server: "iApp GPU 1",
  name: "ตลาดทุ่งครุ",
  latitude: 13.64361893348543,
  longitude:  100.49966438441183,
  date__1: 12012021,
  time_start: "080000",
  time_end: "090000",
  no_correct_wear_mask: 578,
  no_incorrect_wear_mask: 0,
  no_not_wear_mask: 12,
  total: 590,
  percentage: 97.96610169491525
  },
  {
  date: "2021-01-15 19:16:46.603655",
  gpu_server: "iApp GPU 1",
  name: "แนวถนนพระราม1-2",
  latitude: 13.7458795,
  longitude: 100.5320718,
  date__1: 12012021,
  time_start: "080000",
  time_end: "090000",
  no_correct_wear_mask: 93,
  no_incorrect_wear_mask: 1,
  no_not_wear_mask: 0,
  total: 94,
  percentage: 98.93617021276596
  },
  {
  date: "2021-01-15 20:15:09.617229",
  gpu_server: "iApp GPU 1",
  name: "แนวถนนราชดำริ1",
  latitude: 13.7461059,
  longitude: 100.5404026,
  date__1: 12012021,
  time_start: "080000",
  time_end: "090000",
  no_correct_wear_mask: 36,
  no_incorrect_wear_mask: 1,
  no_not_wear_mask: 3,
  total: 40,
  percentage: 90
  },
  {
  date: "2021-01-15 20:23:33.957300",
  gpu_server: "iApp GPU 1",
  name: "แนวถนนราชดำริ2-1",
  latitude: 13.7490615,
  longitude: 100.5408839,
  date__1: 12,
  time_start: "01",
  time_end: 2021,
  no_correct_wear_mask: 202,
  no_incorrect_wear_mask: 1,
  no_not_wear_mask: 19,
  total: 222,
  percentage: 90.990991
  },
  {
  date: "2021-01-15 20:57:45.398782",
  gpu_server: "iApp GPU 1",
  name: "แนวถนนราชดำริ2-2",
  latitude: 13.7476166,
  longitude: 100.5407992,
  date__1: 12,
  time_start: "01",
  time_end: 2021,
  no_correct_wear_mask: 122,
  no_incorrect_wear_mask: 0,
  no_not_wear_mask: 2,
  total: 124,
  percentage: 98.38709677419355
  },
  {
  date: "2021-01-15 21:09:53.909248",
  gpu_server: "iApp GPU 1",
  name: "หน้าองค์การเภสัช1-1",
  latitude: 13.7666797,
  longitude: 100.5277578,
  date__1: 12,
  time_start: "01",
  time_end: 2021,
  no_correct_wear_mask: 62,
  no_incorrect_wear_mask: 0,
  no_not_wear_mask: 2,
  total: 64,
  percentage: 96.875
  },
  {
  date: "2021-01-15 22:17:44.851210",
  gpu_server: "iApp GPU 1",
  name: "แนวถนนราชวิถี1",
  latitude: 13.7662817,
  longitude: 100.5351334,
  date__1: 12,
  time_start: "01",
  time_end: 2021,
  no_correct_wear_mask: 81,
  no_incorrect_wear_mask: 0,
  no_not_wear_mask: 3,
  total: 84,
  percentage: 96.42857142857143
  },
  {
  date: "2021-01-15 22:24:57.822239",
  gpu_server: "iApp GPU 1",
  name: "แนวถนนพระราม1-1",
  latitude: 13.7458795,
  longitude: 100.5320718,
  date__1: 12012021,
  time_start: "080000",
  time_end: "090000",
  no_correct_wear_mask: 41,
  no_incorrect_wear_mask: 0,
  no_not_wear_mask: 0,
  total: 41,
  percentage: 100
  },
  {
  date: "2021-01-15 23:04:25.258498",
  gpu_server: "iApp GPU 1",
  name: "แนวถนนพญาไท1",
  latitude: 13.7620258,
  longitude: 100.5367703,
  date__1: 12012021,
  time_start: "080000",
  time_end: "090000",
  no_correct_wear_mask: 172,
  no_incorrect_wear_mask: 0,
  no_not_wear_mask: 6,
  total: 178,
  percentage: 96.62921348314607
  }
  ]