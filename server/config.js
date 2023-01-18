/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 1000,
    title: "Quà tặng bí mật",
    text: "Niềm vui nho nhỏ"
  },
  {
    type: 1,
    count: 1,
    text: "Mã đáo thành công",
    title: "1.000.000",
    img: "../img/lx01.png"
  },
  {
    type: 2,
    count: 5,
    text: "Đại lộc đầu xuân",
    title: "500.000",
    img: "../img/lx02.png"
  },
  {
    type: 3,
    count: 30,
    text: "Thần tài gõ cửa",
    title: "200.000",
    img: "../img/lx03.png"
  },
  {
    type: 4,
    count: 90,
    text: "May mắn tới nhà",
    title: "100.000",
    img: "../img/lx04.png"
  },
  {
    type: 5,
    count: 142,
    text: "Niềm vui nho nhỏ",
    title: "50.000",
    img: "../img/lx05.png"
  },
];

/**
 * 一Set
 */
const EACH_COUNT = [10, 1, 1, 10, 10, 10];

/**
 * 卡片公司名称标识
 */
const COMPANY = "";

module.exports = {prizes,
  EACH_COUNT,
  COMPANY
};
