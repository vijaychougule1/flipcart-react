import { ShoppingCart, Search, ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-2 flex items-center justify-between">
      
      {/* Left: Logo */}
      <div className="flex items-center gap-1">
        <span className="text-xl font-bold italic">Flipkart</span>
        <span className="text-xs text-yellow-300 italic">
          Explore <span className="font-semibold">Plus</span> +
        </span>
      </div>

      {/* Middle: Search */}
      <div className="flex items-center bg-white rounded-sm w-[40%] px-3">
        <input
          type="text"
          placeholder="Search for products, brands and more"
          className="w-full py-2 outline-none text-black text-sm"
        />
        <Search className="text-blue-600" size={20} />
      </div>

      {/* Right: Menu */}
      <div className="flex items-center gap-8 text-sm font-medium">

        {/* Login */}
        <button className="bg-white text-blue-600 px-6 py-1 font-semibold rounded-sm">
          Login
        </button>

        {/* Become a Seller */}
        <span className="cursor-pointer">Become a Seller</span>

        {/* More */}
        <div className="flex items-center gap-1 cursor-pointer">
          <span>More</span>
          <ChevronDown size={16} />
        </div>

        {/* Cart */}
        <div className="flex items-center gap-1 cursor-pointer">
          <ShoppingCart size={18} />
          <span>Cart</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
