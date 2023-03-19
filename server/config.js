/**
Prize setting
type: Unique identifier, 0 is a placeholder for the default special prize, other prizes cannot use it
count: Number of prizes
title: Prize description
text: Prize title
img: Image address
*/
const prizes = [
  {
  type: 0,
  count: 1000,
  text: "Quay cho vui thoy",
  title: "Yamaha - la la la",
  },
  {
    type: 1,
    count: 1,
    text: "Giải đặc biệt",
    title: "Yamaha Janus",
    img: "../img/db.png"
  },
  {
    type: 2,
    count: 1,
    text: "Giải nhất",
    title: "iPad 10.2 2021 4G 64GB",
    img: "../img/01.png"
  },
  {
    type: 3,
    count: 1,
    text: "Giải nhì 1",
    title: "Máy lọc không khí Sharp FP-JM30V-B",
    img: "../img/02.png"
  },
  {
    type: 4,
    count: 1,
    text: "Giải nhì 2",
    title: "Máy hút bụi Philip FC6721",
    img: "../img/03.png"
  },
  {
    type: 5,
    count: 1,
    text: "Giải ba 1",
    title: "Nồi chiên không dầu Sunhouse 4,5L",
    img: "../img/04.png"
  },
  {
    type: 6,
    count: 1,
    text: "Giải ba 2",
    title: "Lò vi sóng Sharp 23L- R-G372VN-S",
    img: "../img/05.png"
  }, 
  {
    type: 7,
    count: 2,
    text: "Khuyến khích 1",
    title: "Bàn ủi hơi nước cầm tay Tefal DT3030E0",
    img: "../img/06.png"
  },
  {
    type: 8,
    count: 2,
    text: "Khuyến khích 2",
    title: "Nồi áp suất Coex CP -3211A",
    img: "../img/07.png"
  },
  {
    type: 9,
    count: 3,
    text: "Khuyến khích 3",
    title: "Máy xay sinh tố Kangaroo KG4B2",
    img: "../img/08.png"
  },
  {
    type: 10,
    count: 3,
    text: "Khuyến khích 4",
    title: "Bộ nồi Inox Elmich 2223NK",
    img: "../img/09.png"
  },   
];

/**
 * 一Set
 */
const EACH_COUNT = [10, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3];

/**
 * 卡片公司名称标识
 */
const COMPANY = "";

module.exports = {prizes,
  EACH_COUNT,
  COMPANY
};
