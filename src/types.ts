export interface Content {
  id: string;
  title: string;
  content: string;
  image: string;
}

export type ApiContent = Omit<Content, 'id'>;

export interface ApiContentList {
  [id: string]: ApiContent;
}
