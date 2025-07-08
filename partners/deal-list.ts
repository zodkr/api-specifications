const url = 'https://zod.kr/partners-api/board-deal-list';

type BoardId = 'deal' | 'deal_event' | 'deal_partner'
type APIVersion = String

interface RequestParams {
  page: Number
  include: BoardId | String
}

interface DocumentItem {
  id: Number
  title: String
  url: String
  author: String
  thumbnail: String
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

interface APIResponse {
  error: Number
  message: String
  APIVersion: String
  data?: Array<DocumentItem>
}


// example code
const params = {
  page: 1,
  include: 'deal,deal_event'
} as RequestParams

const requestUrl = url + '?' + new URLSearchParams(params).toString()

fetch(requestUrl).then(response => {
  return response.json()
}).then(data: APIResponse => {
  // include your application
})
