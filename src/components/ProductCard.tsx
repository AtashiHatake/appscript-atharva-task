import { useState } from "react";
import { Heart } from "lucide-react";

interface ProductCardProps {
  title: string;
  image: string;
  price?: number;
  isNew?: boolean;
  outOfStock?: boolean;
}

const ProductCard = ({ title, image, price, isNew, outOfStock }: ProductCardProps) => {
  const [liked, setLiked] = useState(false);

  return (
    <article className="group">
      <div className="relative aspect-square bg-secondary overflow-hidden mb-3">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {isNew && (
          <span className="absolute top-3 left-3 text-[10px] font-semibold tracking-wider text-foreground">
            NEW PRODUCT
          </span>
        )}
        {outOfStock && (
          <span className="absolute top-3 right-3 text-[10px] font-semibold tracking-wider text-muted-foreground">
            OUT OF STOCK
          </span>
        )}
      </div>
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h3 className="text-xs font-semibold tracking-wider text-foreground uppercase truncate">
            {title}
          </h3>
          <p className="text-[11px] text-muted-foreground mt-0.5">
            {price
              ? `Sign in or Create an account to see pricing`
              : "Sign in or Create an account to see pricing"}
          </p>
        </div>
        <button
          onClick={() => setLiked(!liked)}
          aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
          className="mt-0.5 shrink-0"
        >
          <Heart
            size={16}
            className={liked ? "fill-heart text-heart" : "text-muted-foreground"}
          />
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
