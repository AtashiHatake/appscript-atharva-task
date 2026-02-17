import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight, ChevronLeft } from "lucide-react";
import ProductCard from "./ProductCard";
import FilterSidebar from "./FilterSidebar";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

const sortOptions = [
  "RECOMMENDED",
  "NEWEST FIRST",
  "POPULAR",
  "PRICE : HIGH TO LOW",
  "PRICE : LOW TO HIGH",
];

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("RECOMMENDED");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data: Product[]) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const sortedProducts = [...products].sort((a, b) => {
    if (selectedSort === "PRICE : HIGH TO LOW") return b.price - a.price;
    if (selectedSort === "PRICE : LOW TO HIGH") return a.price - b.price;
    if (selectedSort === "NEWEST FIRST") return b.id - a.id;
    return 0;
  });

  return (
    <section className="px-6 lg:px-12 py-6">
      {/* Toolbar */}
      <div className="flex items-center justify-between mb-6 border-b border-border pb-4">
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold text-foreground">
            {products.length} ITEMS
          </span>
          <button
            className="hidden md:flex items-center gap-1 text-sm text-muted-foreground underline underline-offset-4"
            onClick={() => setShowFilters(!showFilters)}
          >
            {showFilters ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
            {showFilters ? "HIDE FILTER" : "SHOW FILTER"}
          </button>
        </div>
        <div className="relative">
          <button
            className="flex items-center gap-1 text-sm text-foreground"
            onClick={() => setSortOpen(!sortOpen)}
          >
            {selectedSort}
            <ChevronDown size={14} />
          </button>
          {sortOpen && (
            <div className="absolute right-0 top-8 bg-background border border-border shadow-lg z-10 min-w-[200px]">
              {sortOptions.map((option) => (
                <button
                  key={option}
                  className={`block w-full text-left px-4 py-2 text-xs tracking-wider hover:bg-secondary transition-colors ${
                    selectedSort === option ? "font-semibold" : "text-muted-foreground"
                  }`}
                  onClick={() => {
                    setSelectedSort(option);
                    setSortOpen(false);
                  }}
                >
                  {selectedSort === option && "✓ "}
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter toggle */}
      <button
        className="md:hidden flex items-center gap-1 text-sm text-muted-foreground underline underline-offset-4 mb-4"
        onClick={() => setShowFilters(!showFilters)}
      >
        {showFilters ? "HIDE FILTER" : "SHOW FILTER"}
      </button>

      {/* Content */}
      <div className="flex gap-8">
        {/* Sidebar */}
        {showFilters && (
          <div className="w-56 shrink-0 hidden md:block">
            <FilterSidebar />
          </div>
        )}

        {/* Mobile filter drawer */}
        {showFilters && (
          <div className="fixed inset-0 z-50 bg-background p-6 overflow-y-auto md:hidden">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-sm">FILTERS</span>
              <button onClick={() => setShowFilters(false)} className="text-sm underline">
                CLOSE
              </button>
            </div>
            <FilterSidebar />
          </div>
        )}

        {/* Products */}
        <div className="flex-1">
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-square bg-secondary mb-3" />
                  <div className="h-3 bg-secondary w-3/4 mb-2" />
                  <div className="h-2 bg-secondary w-1/2" />
                </div>
              ))}
            </div>
          ) : (
            <div
              className={`grid gap-6 ${
                showFilters
                  ? "grid-cols-2 md:grid-cols-3"
                  : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              }`}
            >
              {sortedProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  image={product.image}
                  price={product.price}
                  isNew={index === 0}
                  outOfStock={index === 3}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
