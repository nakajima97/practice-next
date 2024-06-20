import { Staffs } from '../types/type'

const useDummyStaff = () => {
  /**
   * ダミーのスタッフデータを取得する
   * 
   * @returns Staffs
   */
  const fetchDummyStaff = () => {
    const nowDate = new Date()

    const year = nowDate.getFullYear()
    const month = nowDate.getMonth()
    const date = nowDate.getDate()

    const data1 = new Date(year, month, date - 3)
    const data2 = new Date(year, month, date - 1)
    const data3 = new Date(year, month, date - 6)
    const data4 = new Date(year, month, date - 4)

    const staffs: Staffs = [
      { id: 1, name: 'John Doe', entryDate: data1 },
      { id: 2, name: 'Jane Doe', entryDate: data2 },
      { id: 3, name: 'Alice', entryDate: data3 },
      { id: 4, name: 'Bob', entryDate: data4 },
    ]

    return staffs
  }

  return {
    fetchDummyStaff
  }
}

export { useDummyStaff }