import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {
        items
          .filter((item, idx) => idx < 4) //filter only first 4
          .map(({ id, ...itemProps }) => (
            <CollectionItem key={id} {...itemProps} />
          ))
        //this whole thing is not best practice, cuz it will get performance hit
        //this will be called each time it has to re-render
      }
    </div>
  </div>
);

export default CollectionPreview;
