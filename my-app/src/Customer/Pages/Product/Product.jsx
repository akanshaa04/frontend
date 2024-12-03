import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useSearchParams } from 'react-router-dom';
import FilterSection from './FilterSection';
import ProductCard from './ProductCard';
import { Box, Divider, FormControl, IconButton, InputLabel, MenuItem, Select, useMediaQuery, useTheme } from '@mui/material';
import { FilterAlt } from '@mui/icons-material';

const normalizeParams = (params) => {
  const normalized = {};
  for (const key in params) {
    if (params[key]) normalized[key] = params[key]; 
  }

  if (normalized.price) {
    const [minPrice, maxPrice] = normalized.price.split('-').map((p) => p.trim());
    normalized.minPrice = parseInt(minPrice, 10);
    normalized.maxPrice = parseInt(maxPrice, 10);
    delete normalized.price;
  }

  if (normalized.discount) {
    normalized.minDiscount = parseInt(normalized.discount, 10);
    delete normalized.discount;
  }

  return normalized;
};

const Product = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const [sort, setSort] = useState('');
  const { category } = useParams(); 
  const [searchParams] = useSearchParams(); 
  const [products, setProducts] = useState([]);

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = Object.fromEntries([...searchParams]); 
        const params = normalizeParams({
          category,
          colors: query.color, 
          discount: query.discount,
          price: query.price,
          sort: sort,
        });

        console.log('Fetching products with params:', params);

        const response = await axios.get('http://localhost:8080/products', { params });
        console.log('Products fetched:', response.data);

        setProducts(response.data.content); 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [category, searchParams, sort]); 
  
  return (
    <div className="mt-10">
      <h1 className="text-3xl text-center font-bold text-gray-700 pb-5 px-9 uppercase space-x-2">
        {category.replace('_', ' ')}
      </h1>

      <div className="lg:flex">
        <section className="filter_section hidden lg:block w-[20%]">
          <FilterSection />
        </section>

        <div className="w-full lg:w-[80%] space-y-5">
          <div className="flex justify-between items-center px-9 h-[40px]">
            <div className="relative w-[50%]">
              {!isLarge && (
                <IconButton>
                  <FilterAlt />
                </IconButton>
              )}
              {!isLarge && (
                <Box>
                  <FilterSection />
                </Box>
              )}
            </div>

            <FormControl size="small" sx={{ width: '200px' }}>
              <InputLabel id="demo-simple-select-label">Sort</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sort}
                label="Sort"
                onChange={handleSortChange}
              >
                <MenuItem value="price_low">Price: Low - High</MenuItem>
                <MenuItem value="price_high">Price: High - Low</MenuItem>
                <MenuItem value="newest">Newest</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Divider />

          <section className="products_section grid gap-y-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 justify-center">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Product;
