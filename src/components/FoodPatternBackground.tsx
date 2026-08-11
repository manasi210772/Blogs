import { useMemo } from "react";
import { Pizza, Coffee, IceCream, Cookie, Soup, UtensilsCrossed, Croissant, Salad, Dessert, Donut, CupSoda, Cake, Sandwich, Popcorn, Fish } from "lucide-react";

const icons = [Pizza, Coffee, IceCream, Cookie, Soup, UtensilsCrossed, Croissant, Salad, Dessert, Donut, CupSoda, Cake, Sandwich, Popcorn, Fish];

interface IconItem {
  Icon: React.ElementType;
  top: number;
  left: number;
  scale: number;
}

const FoodPatternBackground = () => {
  const items = useMemo(() => {
    const generatedItems: IconItem[] = [];
    
    const rows = 5; 
    const cols = 8; 
    
    const cellWidth = 100 / cols;
    const cellHeight = 100 / rows;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const randomIcon = icons[Math.floor(Math.random() * icons.length)];

        const cellBaseX = c * cellWidth;
        const cellBaseY = r * cellHeight;

        const randomOffsetX = (Math.random() * 0.6 + 0.2) * cellWidth;
        const randomOffsetY = (Math.random() * 0.6 + 0.2) * cellHeight;

        generatedItems.push({
          Icon: randomIcon,
          top: cellBaseY + randomOffsetY,
          left: cellBaseX + randomOffsetX,
          scale: 0.85 + Math.random() * 0.35,
        });
      }
    }

    return generatedItems;
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden text-black/[0.08] dark:text-white/[0.05]">
      {items.map(({ Icon, top, left, scale }, i) => (
        <div
          key={i}
          className="absolute transform transition-transform"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            transform: `scale(${scale})`,
          }}
        >
          <Icon className="w-9 h-9" />
        </div>
      ))}
    </div>
  );
};

export default FoodPatternBackground;