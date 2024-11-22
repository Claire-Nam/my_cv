import { Badge } from "react-bootstrap";
import { Tags, tagDatas } from "../data/tagData";

export const projectTag = {
  cv: [1, 2, 3, 20, 21],
  festival: [1, 14, 18],
  fitant: [1, 2, 4, 5, 15, 16, 19, 20, 21],
};

export const workTag = {
  ascent: [7, 8, 9, 10, 11],
  artience: [10, 8],
  curve: [10, 17],
};

export const eduTag = {
  kosta: [1, 2, 3, 4, 5, 6, 12, 18, 19],
  elice: [1, 2, 3, 4, 5, 19],
  lsbf: [13],
};

interface TagListProps {
  tags: number[];
}

const TagItem: React.FC<TagListProps> = ({ tags }) => {
  const fillteredTags = tagDatas.filter((tag) => tags.includes(tag.id));

  return (
    <div className="mt-4">
      {fillteredTags.map((tag) =>
        tag.tags.map((tagItem: string, idx: number) => (
          <Badge
            key={`${tag.id}-${idx}`}
            bg="light"
            text="dark"
            className="me-2 mb-2 p-2 border rounded"
          >
            {tagItem}
          </Badge>
        ))
      )}
    </div>
  );
};

export default TagItem;
