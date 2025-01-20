const url = 'https://zod.kr/partners-api/deal-list';

type BoardId = 'deal' | 'deal_event' | 'deal_partner'
type APIVersion = String

interface Request {
  page: Number
  include: BoardId | String
}

interface DocumentItem {
  id: Number
  title: String
  url: String
  category: String
  count: {
    comment: Number
    vote: Number
  }
  createdAt: Date
  metadata: {
    platform: String
    price: String
    shippingFee: String
    status: 'open' | 'close'
  }
}

interface Response {
  error: Number
  message: String
  APIVersion: String
  data?: Array<DocumentItem>
}
