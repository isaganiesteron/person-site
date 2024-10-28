export type Block = {
  object: string;
  id: string;
  parent: {
    type: string;
    page_id: string;
  };
  created_time: string;
  last_edited_time: string;
  created_by: {
    object: string;
    id: string;
  };
  last_edited_by: {
    object: string;
    id: string;
  };
  has_children: boolean;
  archived: boolean;
  in_trash: boolean;
  type: string;
  heading_1?: {
    rich_text: RichText[];
    is_toggleable: boolean;
    color: string;
  };
  paragraph?: {
    rich_text: RichText[];
    color: string;
  };
  image?: {
    caption: any[];
    type: string;
    file?: {
      url: string;
      expiry_time: string;
    };
  };
};

type RichText = {
  type: string;
  text: {
    content: string;
    link: { url: string } | null;
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  plain_text: string;
  href: string | null;
};
