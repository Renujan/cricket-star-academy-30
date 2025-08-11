import React, { useState } from 'react';
import { ShoppingCart, Star, Truck, Shield, Tag, Filter, Search } from 'lucide-react';
import AnimatedCard from '@/components/AnimatedCard';

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'bats', name: 'Cricket Bats' },
    { id: 'balls', name: 'Cricket Balls' },
    { id: 'protective', name: 'Protective Gear' },
    { id: 'apparel', name: 'Apparel' },
    { id: 'accessories', name: 'Accessories' }
  ];

  const products = [
    {
      id: 1,
      name: 'Professional Cricket Bat - English Willow',
      category: 'bats',
      price: 299.99,
      originalPrice: 349.99,
      discount: 14,
      stock: 8,
      rating: 4.8,
      reviews: 42,
      description: 'Premium grade English willow cricket bat with traditional handle. Perfect for intermediate to advanced players.',
      features: ['Grade 2 English Willow', 'Traditional Handle', 'Professional Weight Balance', '2 Year Warranty'],
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center',
      offer: 'Limited Time Offer'
    },
    {
      id: 2,
      name: 'Leather Cricket Ball - Match Quality',
      category: 'balls',
      price: 24.99,
      originalPrice: 29.99,
      discount: 17,
      stock: 25,
      rating: 4.9,
      reviews: 78,
      description: 'Official match quality leather cricket ball. Hand-stitched with premium leather for durability.',
      features: ['Premium Leather', 'Hand Stitched', 'Official Weight', 'Match Quality'],
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center',
      offer: 'Best Seller'
    },
    {
      id: 3,
      name: 'Professional Batting Pads',
      category: 'protective',
      price: 89.99,
      originalPrice: 109.99,
      discount: 18,
      stock: 12,
      rating: 4.7,
      reviews: 35,
      description: 'Lightweight batting pads with superior protection. Comfortable fit with adjustable straps.',
      features: ['Lightweight Design', 'Superior Protection', 'Adjustable Straps', 'Breathable Material'],
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop&crop=center',
      offer: 'New Arrival'
    },
    {
      id: 4,
      name: 'Cricket Helmet - Pro Series',
      category: 'protective',
      price: 149.99,
      originalPrice: 179.99,
      discount: 17,
      stock: 6,
      rating: 4.9,
      reviews: 28,
      description: 'Professional grade cricket helmet with titanium grille. Maximum protection with comfort.',
      features: ['Titanium Grille', 'Comfort Padding', 'Adjustable Fit', 'Safety Certified'],
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center',
      offer: 'Safety First'
    },
    {
      id: 5,
      name: 'MVP Academy Jersey',
      category: 'apparel',
      price: 39.99,
      originalPrice: 49.99,
      discount: 20,
      stock: 30,
      rating: 4.6,
      reviews: 95,
      description: 'Official MVP Cricket Academy jersey. Moisture-wicking fabric with academy logo.',
      features: ['Moisture Wicking', 'Official Academy Logo', 'Comfortable Fit', 'Machine Washable'],
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center',
      offer: 'Academy Official'
    },
    {
      id: 6,
      name: 'Cricket Gloves - Pro Grip',
      category: 'protective',
      price: 59.99,
      originalPrice: 69.99,
      discount: 14,
      stock: 18,
      rating: 4.8,
      reviews: 52,
      description: 'Professional batting gloves with enhanced grip and protection. Comfortable fit for long sessions.',
      features: ['Enhanced Grip', 'Premium Protection', 'Comfortable Fit', 'Durable Material'],
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop&crop=center',
      offer: 'Pro Choice'
    },
    {
      id: 7,
      name: 'Cricket Kit Bag - Large',
      category: 'accessories',
      price: 79.99,
      originalPrice: 94.99,
      discount: 16,
      stock: 15,
      rating: 4.7,
      reviews: 41,
      description: 'Spacious cricket kit bag with multiple compartments. Perfect for carrying all your cricket gear.',
      features: ['Multiple Compartments', 'Durable Material', 'Comfortable Straps', 'Water Resistant'],
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center',
      offer: 'Organizer Special'
    },
    {
      id: 8,
      name: 'Tennis Ball Set (6 Pack)',
      category: 'balls',
      price: 19.99,
      originalPrice: 24.99,
      discount: 20,
      stock: 40,
      rating: 4.5,
      reviews: 88,
      description: 'High-quality tennis balls perfect for practice sessions. Durable and consistent bounce.',
      features: ['6 Ball Pack', 'Consistent Bounce', 'Practice Quality', 'Durable Construction'],
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center',
      offer: 'Practice Pack'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getStockStatus = (stock: number) => {
    if (stock === 0) return { text: 'Out of Stock', color: 'text-destructive' };
    if (stock <= 5) return { text: 'Low Stock', color: 'text-orange-500' };
    return { text: 'In Stock', color: 'text-green-500' };
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-secondary-foreground">
        <div className="container-width text-center">
          <h1 className="text-5xl md:text-6xl font-oswald font-bold mb-6">
            Cricket
            <span className="text-gradient block">Store</span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Premium cricket equipment and academy merchandise. Everything you need to elevate your game.
          </p>
          <div className="flex items-center justify-center space-x-8 mt-8">
            <div className="flex items-center space-x-2">
              <Truck className="w-5 h-5" />
              <span className="text-sm">Free Shipping Over $100</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span className="text-sm">1 Year Warranty</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-width">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-background text-foreground hover:bg-muted'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => {
              const stockStatus = getStockStatus(product.stock);
              return (
                <AnimatedCard 
                  key={product.id} 
                  variant="glass" 
                  className="overflow-hidden group"
                  delay={index * 100}
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.discount > 0 && (
                      <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-2 py-1 rounded-lg text-sm font-medium">
                        -{product.discount}%
                      </div>
                    )}
                    {product.offer && (
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-2 py-1 rounded-lg text-xs font-medium">
                        {product.offer}
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="font-oswald font-semibold text-lg mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating) 
                                ? 'fill-primary text-primary' 
                                : 'text-muted-foreground'
                            }`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-oswald font-bold text-foreground">
                          ${product.price}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="text-lg text-muted-foreground line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                      <span className={`text-sm font-medium ${stockStatus.color}`}>
                        {stockStatus.text}
                      </span>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Stock:</span>
                        <span className="font-medium">{product.stock} units</span>
                      </div>
                    </div>

                    <button 
                      className="w-full btn-hero flex items-center justify-center space-x-2"
                      disabled={product.stock === 0}
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>{product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}</span>
                    </button>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <Tag className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-oswald font-semibold text-foreground mb-2">
                No products found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-oswald font-semibold text-lg mb-2">Free Shipping</h3>
              <p className="text-muted-foreground">
                Free shipping on all orders over $100. Fast and reliable delivery.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-oswald font-semibold text-lg mb-2">Quality Guarantee</h3>
              <p className="text-muted-foreground">
                All products come with our quality guarantee and warranty protection.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-oswald font-semibold text-lg mb-2">Expert Selection</h3>
              <p className="text-muted-foreground">
                Carefully selected products recommended by our professional coaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-secondary-foreground">
        <div className="container-width text-center">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-6">
            Need Help Choosing
            <span className="text-gradient block">Equipment?</span>
          </h2>
          <p className="text-xl text-secondary-foreground/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Our expert coaches are here to help you select the perfect equipment for your skill level and playing style.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/contact" className="btn-hero">
              Contact Our Experts
            </a>
            <a href="/programs" className="btn-outline bg-secondary-foreground/10 backdrop-blur-sm">
              View Programs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Store;