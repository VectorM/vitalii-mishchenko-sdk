export type Sort = {
  selector: string;
  order: string;
}

export type Params = {
  limit?: number;
  page?: number;
  offset?: number;
  sort?: Sort;
}
