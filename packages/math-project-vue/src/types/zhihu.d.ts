export interface ZhiHuHotList {
  data: ZhiHuHot[]
  paging: Paging
  fresh_text: string
  display_num: number
  display_first: boolean
  fb_bill_main_rise: number
  head_zone: Headzone
}

export interface Headzone {
  type: string
  data: Datum2[]
}

export interface Datum2 {
  id: string
  link_url: string
  title: string
  source_type: number
  attached_info: string
  tag: string
  tag_bg_color: string
}

export interface Paging {
  is_end: boolean
  is_start: boolean
  next: string
  previous: string
  totals: number
}

export interface ZhiHuHot {
  type: string
  style_type: string
  id: string
  card_id: string
  target: Target
  attached_info: string
  detail_text: string
  trend: number
  debut: boolean
  children: Child[]
  card_label?: Cardlabel
}

export interface Cardlabel {
  type: string
  icon: string
  night_icon: string
}

export interface Child {
  type: string
  thumbnail: string
}

export interface Target {
  id: number
  title: string
  url: string
  type: string
  created: number
  answer_count: number
  follower_count: number
  author: Author
  bound_topic_ids: number[]
  comment_count: number
  is_following: boolean
  excerpt: string
}

export interface Author {
  type: string
  user_type: string
  id: string
  url_token: string
  url: string
  name: string
  headline: string
  avatar_url: string
}
