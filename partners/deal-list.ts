type boardId = 'deal' | 'deal_event' | 'deal_partner';

interface Request {
  page: Number
  include: boardId | [boardId]
}

interface Response {
  id: Number
  title: String
  url: String
  count: {
    comment: Number
    vote: Number
  }
  createdAt: Date
  metadata: {
    provider: '쿠팡' | '네이버' | '지마켓' | '옥션' | '11번가' | '스팀' | '기타'
    price: String
    shippingFee: String
    status: 'open' | 'close'
  }
}
