const url = 'https://zod.kr/partners-api/deal-list';

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
    provider: String
    price: String
    shippingFee: String
    status: 'open' | 'close'
  }
}
