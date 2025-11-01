/*
  - Array.copyWithin Method 
  - Array.some Method
  - Array.every Method
  - Train Object Vs Map
  - Array.forEach Method
  - Array.map Method
  - Array.filter Method
  - Array.indexOf Method
  - Array.findIndex Method
  - Array.lastIndexOf Method
  - Array.find Method


  ///////////////////////////////

  - Array.flat Method
  - Array.flatMap Method
  - Array.from Method
  - Array.includes Method
  - Array.isArray Method
  - Array.join Method
  - Array.keys Method
  - Array.pop Method
  - Array.push Method
  - Array.reduce Method
  - Array.reduceRight Method
  - Array.reverse Method
  - Array.shift Method
  - Array.slice Method
  - Array.sort Method
  - Array.splice Method
  - Array.toLocaleString Method
  - Array.toString Method
  - Array.unshift Method
  - Array.values Method
  - Array.concat Method
  - Array.entries Method
  
*/
////////////////////////////////////////////////////////////////////////
//  Array.copyWithin Method
/*
تفوم بنسخ جزء من المصفوفة إلى مكان آخر في نفس المصفوفة دون تغيير طولها.
It copies part of an array to another location in the same array without changing its length.
  Array Methods
  - Array.copyWithin(Target, Start => Optional, End => Optional)
  "Copy Part Of An Array To Another Location in The Same Array"
  -- Any Negative Value Will Count From The End
  -- Target
  ---- Index To Copy Part To المكان اللي هينسخ فيه الجزء اللي عاوز ينسخه
  ---- If At Or Greater Than Array Length Nothing Will Be Copied
  -- Start
  ---- Index To Start Copying From
  ---- If Ommited = Start From Index 0
  -- End
  ---- Index To End Copying From 
  ---- Not Including End
  ---- If Ommited = Reach The End
*/
// let myArray = [10, 20, 30, 40, 50, "A", "B"];

// console.log(myArray.copyWithin(3)); //[10, 20, 30, 10, 20, 30, 40]
// هنا انا عاوزه يبدأ يحط الجزء المنسوخ بداية من اندكس 3 = 40 و بعد كده هيبدأ ينسخ من اندكس 0 و يوصل لحد اندكس 2 = 30 هياخد اول 4 عناصر علشان يحطهم في المصفوفة علشان عددها مش هيتغير هيفضل  7

// myArray.copyWithin(4, 0, 3); // هنا انا عاوزه يبدأ يحط الجزء المنسوخ بداية من اندكس 4 = 50 و بعد كده هيبدأ ينسخ من اندكس 0 و يوصل لحد اندكس 2 = 30 هياخد اول 3 عناصر علشان يحطهم في المصفوفة علشان عددها مش هيتغير هيفضل  7
// console.log(myArray); // [10, 20, 30, 40, 10, 20, 30]


// Array.prototype.copyWithin = function(target, start, end) {
//   // Check if the target is within the bounds of the array
//   if (target < 0 || target >= this.length) {
//     return this; // If target is out of bounds, return the original array
//   }

//   // Handle negative indices for start and end
//   start = start < 0 ? Math.max(this.length + start, 0) : start;
//   end = end === undefined ? this.length : (end < 0 ? Math.max(this.length + end, 0) : end);

//   // Ensure start and end are within bounds
//   start = Math.min(start, this.length);
//   end = Math.min(end, this.length);

//   // Copy elements from start to end to the target position
//   for (let i = start; i < end; i++) {
//     if (target + (i - start) < this.length) {
//       this[target + (i - start)] = this[i];
//     }
//   }

//   return this; // Return the modified array
// }


//////////////////////////////////////////////////////////////////////////  
// Array.some Method
/* 
  تفوم بالتحقق مما إذا كان على الأقل عنصر واحد في المصفوفة يحقق شرطًا معينًا.
  It checks if at least one element in the array satisfies a specific condition.
  Array Methods
  - Array.some(Function)
  "Check If At Least One Element In The Array Satisfies A Condition"
  -- Function
  ---- Function To Test Each Element
  ---- Return True If Condition Is Met, False Otherwise
  //////////
   Array Methods
  - Array.some(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
   Using
  - Check if Element Exists In Array
  - Check If Number In Range
*/
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];   
// let myNumber = 10;

// let check = nums.some( function(e) {
//     // console.log("test e", e); // function will run on every element in the array
//     // return e === myNumber; // check if the element is equal to myNumber
//     return e > 11 
// }, this )

// console.log("check" ,check) // 
 
// function myFunction(arr, num) {
//   // Check if at least one element in the array is greater than num
//   return arr.some(function(element) {
//     return element > num;
//   });
// }   

// console.log(myFunction(nums, 5)); // true
// console.log(myFunction(nums, 15)); // false
// console.log(myFunction(nums, 0)); // true

// let range = {
//     min: 10,
//     max: 20
// }
// let checkNumInRange = nums.some( function(e) {
//     return e >=range.min && e <= range.max;
// });
// console.log("checkNumInRange", checkNumInRange); // true

////////////////////////////////////////////////////////////////////
// Array.every Method
/*
  تقوم بالتحقق مما إذا كان جميع العناصر في المصفوفة يحققون شرطًا معينًا.
  It checks if all elements in the array satisfy a specific condition.
  Array Methods
  - Array.every(Function)
  "Check If All Elements In The Array Satisfy A Condition"
  -- Function
  ---- Function To Test Each Element
  ---- Return True If Condition Is Met, False Otherwise
  //////////
   Array Methods
  - Array.every(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
   Using
  - Check If Element Exists In Array
  - Check If Number In Range
*/

// let nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let myNumber2 = 10;
// let check2 = nums2.every( function(e) {
//     // console.log("test e", e); // function will run on every element in
//     // return e === myNumber2; // check if the element is equal to myNumber2
//     return e > 0
// Check if all elements in the array are greater than a specific number
// function myFunction(arr, num) {
//     return arr.every(function(element) {
//         return element >= num;       
//   });
// }

// console.log(myFunction(nums2, 0)); // true
// console.log(myFunction(nums2, 1)); // false
// console.log(myFunction(nums2, 2)); // false

// const locations = {
//     20: "Place 1",
//     30: "Place 2",
//     40: "Place 3",
//   }

//   console.log("", Object.keys(locations)); // ['20', '30', '40']
//   console.log("", Object.values(locations)); // ['Place 1', 'Place 2', 'Place 3']
//   console.log("", Object.entries(locations)); // [['20', 'Place 1'], ['30', 'Place 2'], ['40', 'Place 3']]

// let mainLocation = 15;
// let locationsArray = Object.keys(locations).every( function(location) {
//     return location >= mainLocation;
// })
// console.log("locationsArray", locationsArray); // true
////////////////////////////////////////////////////////////////////////////
// Train Object Vs Map
// object keys, values, entries methods , Map keys, values, entries methods
// const locations = {
//     20: "Place 1",
//     30: "Place 2",
//     40: "Place 3",
//   }

// console.log("keys", Object.keys(locations)); // ['20', '30', '40']
// console.log("keys Number", Object.keys(locations).map( function(n) {return +n} )); // [20, 30, 40]
// console.log("values", Object.values(locations)); // ['Place 1', 'Place 2', 'Place 3']
// console.log("entries", Object.entries(locations)); // [['20', 'Place 1'], ['30', ' Place 2'], ['40', 'Place 3']]

// const location2 = new Map();
// location2.set(20, "Place 1");
// location2.set(30, "Place 2");
// location2.set(40, "Place 3");

// // console.log("keys", location2.keys()); // MapIterator {20, 30, 40}
// // console.log("values", location2.values()); // MapIterator {'Place 1', 'Place 2', 'Place 3'}
// // console.log("entries", location2.entries()); // MapIterator [[20, 'Place 1'], [30, 'Place 2'], [40, 'Place 3']]


// console.log("keys", Array.from(location2.keys())); // [20, 30, 40]
// console.log("values", Array.from(location2.values())); // ['Place 1', 'Place 2', 'Place 3']
// console.log("entries", Array.from(location2.entries())); // [[20, 'Place 1'], [30, 'Place 2'], [40, 'Place 3']]


////////////////////////////////////////////////////////////////////////
//  - Array.forEach Method

// array.forEach(function(element, index, array) {
//     // الكود المراد تنفيذه
// });

// const arr = [2,3,4,5,6]
// arr.forEach((item, index, arr)=> {
//  if (index == 2) return; // this will not breack the loop it will just ignore this case and willnot print it 
//  console.log("item", item)
//  console.log("index", index)
//  console.log("arr", arr)
// })

// let myArr = [1, 2, 3, 4, 5];
// myArr.forEach( (item, index, myArr)=> {
//     console.log(`Item at index ${index} is ${item}`);
//     item *= 2; // This will not change the original array
//     console.log(`Item at index ${index} after multiplication is ${item}`);
//     console.log(`Item at index ${index} in original array is still ${myArr[index]}`);
//     console.log("my Arr", myArr) // This will log the original array
// }) 
// console.log("myArr", myArr)

// Output: 
// Item at index 0 is 1
// Item at index 0 after multiplication is 2
// Item at index 0 in original array is still 1
// my Arr [ 1, 2, 3, 4, 5 ]
// Item at index 1 is 2
// Item at index 1 after multiplication is 4
// Item at index 1 in original array is still 2
// my Arr [ 1, 2, 3, 4, 5 ]
// Item at index 2 is 3
// Item at index 2 after multiplication is 6
// Item at index 2 in original array is still 3
// my Arr [ 1, 2, 3, 4, 5 ]


// const btns = document.querySelectorAll(".btn");
// btns.forEach( (btn) => {
//     btn.addEventListener("click", (e) => {
//         console.log(`Button ${btn.textContent} clicked`);
//         e.target.style.backgroundColor = "blue"; // Change button color on click
//     }); 
// })

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(num => {
//     if (num === 3) {
//         return; // هذا لن يوقف الحلقة، فقط يتخطى هذا العنصر
//     }
//     console.log(num);
// });
// // النتيجة: 1, 2, 4, 5

////////////////////////////////////////////////////////////////////////////////
// - Array.map 
// map هو متود مدمج في JavaScript يستخدم لإنشاء مصفوفة جديدة من خلال تطبيق دالة على كل عنصر في المصفوفة الأصلية. الفرق الرئيسي عن forEach أن map يُرجع مصفوفة جديدة.


// const newArray = array.map(function(element, index, array) {
//     // return القيمة الجديدة
// });

// let myArr = [1, 2, 3, 4, 5];
// let newArr = myArr.map( (item, index, arr)=> {
//   //  console.log("item + item ",item += item)
//    return item += item
// })
// console.log("my Arr", myArr)
// console.log("new Arr", newArr)

// const users = [
//     { id: 1, name: 'أحمد', age: 25 },
//     { id: 2, name: 'سارة', age: 30 },
//     { id: 3, name: 'محمد', age: 28 }
// ];

// const userNames = users.map ((user) => user.name)
// console.log("users", users)
// console.log("userNames", userNames)// Output: ['أحمد', 'سارة', 'محمد']

// const products = [
//     { id: 1, name: 'لابتوب', price: 1000, category: 'إلكترونيات' },
//     { id: 2, name: 'قميص', price: 50, category: 'ملابس' },
//     { id: 3, name: 'موبايل', price: 800, category: 'إلكترونيات' }
// ];

// // تحويل إلى format جديد مع حساب الضريبة
// const productsWithTax = products.map(product => ({
//     ...product,
//     priceWithTax: product.price * 1.15,
//     formattedPrice: `${product.price} دولار`,
//     slug: product.name.replace(/\s+/g, '-').toLowerCase()
// }));

// console.log(productsWithTax);


// بيانات من API
// const apiResponse = [
//     { 
//         user_id: 1, 
//         first_name: 'أحمد', 
//         last_name: 'محمد',
//         email_address: 'ahmed@example.com',
//         birth_date: '1990-05-15'
//     },
//     { 
//         user_id: 2, 
//         first_name: 'فاطمة', 
//         last_name: 'أحمد',
//         email_address: 'fatima@example.com',
//         birth_date: '1985-08-22'
//     }
// ];

// // تحويل إلى format التطبيق
// const cleanedUsers = apiResponse.map(user => ({
//     id: user.user_id,
//     fullName: `${user.first_name} ${user.last_name}`,
//     email: user.email_address,
//     age: new Date().getFullYear() - new Date(user.birth_date).getFullYear(),
//     initials: `${user.first_name[0]}${user.last_name[0]}`
// }));

// console.log("cleanedUsers", cleanedUsers);
// // 

// موضوع  معقد 
// let n = [];
// apiResponse.forEach( function(user) {
//   n.id=  user.user_id,
//   n.fullName= `${user.first_name} ${user.last_name}`,
//   n.email= user.email_address;
//   n.age= new Date().getFullYear() - new Date(user.birth_date).getFullYear(),
//   n.initials= `${user.first_name[0]}${user.last_name[0]}`
// })
// console.log("n", n); 

// const blogPosts = [
//     { 
//         id: 1, 
//         title: 'مقدمة في JavaScript', 
//         content: 'محتوى المقال...', 
//         author: 'أحمد محمد',
//         publishDate: '2024-01-15',
//         tags: ['JavaScript', 'برمجة', 'تعلم']
//     },
//     { 
//         id: 2, 
//         title: 'تعلم Vue.js', 
//         content: 'محتوى آخر...', 
//         author: 'سارة أحمد',
//         publishDate: '2024-01-20',
//         tags: ['Vue.js', 'Frontend', 'تطوير']
//     }
// ];

// // تحويل إلى HTML
// const postsHTML = blogPosts.map(post => `
//     <article class="blog-post" data-id="${post.id}">
//         <h2>${post.title}</h2>
//         <div class="meta">
//             <span class="author">بواسطة: ${post.author}</span>
//             <time datetime="${post.publishDate}">${post.publishDate}</time>
//         </div>
//         <div class="content">${post.content}</div>
//         <div class="tags">
//             ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
//         </div>
//     </article>
// `).join('');

// document.getElementById('blog-container').innerHTML = postsHTML;

// const products = [
//     { name: 'لابتوب', price: 1000, category: 'إلكترونيات' },
//     { name: 'قميص', price: 50, category: 'ملابس' },
//     { name: 'موبايل', price: 800, category: 'إلكترونيات' }
// ];

// تصفية المنتجات الإلكترونية وتحويلها
// const electronicProducts = products
//   .filter( (product)=> product.category === 'إلكترونيات')
//   .map( (product)=> ({
//     ...product,
//     formattedPrice: `${product.price} دولار`,
//     isExpensive: product.price > 500
//   }) )
//     console.log("products", products);
//     console.log("electronic Products", electronicProducts);

// const electronicProducts = products
//   .map( (product)=> product.category === 'إلكترونيات')
//   console.log("electronic Products", electronicProducts);
/////////////////////////////////////////////////////////////////////////////
// - Array.filter method
/* 
filter هو متود مدمج في JavaScript يستخدم لإنشاء مصفوفة جديدة تحتوي على العناصر التي تحقق شرطاً معيناً. يُرجع مصفوفة جديدة دون تعديل المصفوفة الأصلية.
*/

// const newArray = array.filter(function(element, index, array) {
//     // return true للاحتفاظ بالعنصر، false لإزالته
//     return condition;
// });

// const items = ['تفاح', 'موز', 'برتقال', 'مانجو', 'فراولة'];
// // العناصر التي ليست الأولى والأخيرة
// const res = items.filter( (item, index, arr)=>  index !== 0 && index !== arr.length -1);
// console.log("res", res)

// const employees = [
//     { 
//         id: 1, 
//         name: 'أحمد محمد', 
//         department: 'تطوير البرمجيات', 
//         salary: 5000, 
//         skills: ['JavaScript', 'React', 'Node.js'],
//         joinDate: '2020-01-15',
//         isRemote: true
//     },
//     { 
//         id: 2, 
//         name: 'فاطمة أحمد', 
//         department: 'التسويق', 
//         salary: 4000, 
//         skills: ['SEO', 'Content Marketing', 'Social Media'],
//         joinDate: '2021-03-20',
//         isRemote: false
//     },
//     { 
//         id: 3, 
//         name: 'محمد علي', 
//         department: 'تطوير البرمجيات', 
//         salary: 6000, 
//         skills: ['Python', 'Django', 'PostgreSQL'],
//         joinDate: '2019-07-10',
//         isRemote: true
//     },
//     { 
//         id: 4, 
//         name: 'سارة محمود', 
//         department: 'التصميم', 
//         salary: 3500, 
//         skills: ['Photoshop', 'Illustrator', 'Figma'],
//         joinDate: '2022-01-05',
//         isRemote: false
//     }
// ];

// function searchEmps(query) {
//   const searchValue = query.toLowerCase();
//   return employees.filter( (employee)=> {
//     return employee.name.toLowerCase().includes(searchValue) || 
//     employee.department.toLowerCase().includes(searchValue) ||
//     employee.skills.some( (skill)=> skill.toLowerCase().includes(searchValue) )
//   });
// }


// console.log(searchEmps('Django'))

// تصفية حسب الراتب
// function searchBySalary(minSalary, maxSalary) {
//   return employees.filter( (employee)=> 
//      employee.salary > minSalary && employee.salary < maxSalary
//   )
// }
// console.log(searchBySalary(1000, 4000))

// تصفية حسب سنوات الخبرة
// function searchByExperience(minExperience, maxExperience) {
//     return employees.filter( (employee)=> {
//         const currentExperience =  new Date().getFullYear() - new Date(employee.joinDate).getFullYear();
//         console.log("new Date().getFullYear() ", new Date().getFullYear() )
//         console.log("new Date(employee.joinDate)", new Date(employee.joinDate).getFullYear() )
//         return currentExperience >= minExperience && currentExperience <= maxExperience
//     })
// }
// console.log(searchByExperience(1,3))

// function searchEmployeesBySkills(requiredSkills) {
//     return employees.filter(employee => 
//         requiredSkills.some(skill => 
//             employee.skills.includes(skill)  // index 1
//         )
//     );
// }

// // اختبار الدالة
// console.log(searchEmployeesBySkills(['JavaScript', 'Photoshop'])); 

//////////// ex: 2   .

//  const products = [
//     { 
//         id: 1, 
//         name: 'لابتوب Dell XPS 13', 
//         price: 1200, 
//         category: 'elctronics',
//         subCategory: 'labtop',
//         brand: 'Dell',
//         inStock: true, 
//         rating: 3.5, 
//         reviews: 128,
//         tags: ['GAMing', 'work', 'portable'],
//         colors: ['black', 'فضي'],
//         sizes: ['13 بوصة'],
//         discount: 10
//     },
//     { 
//         id: 2, 
//         name: 'قميص قطني أزرق', 
//         price: 50, 
//         category: 'ملابس',
//         subCategory: 'قمصان',
//         brand: 'Nike',
//         inStock: true, 
//         rating: 4.0, 
//         reviews: 45,
//         tags: ['casual', 'summer', 'cotton'],
//         colors: ['أزرق', 'أبيض', 'black'],
//         sizes: ['S', 'M', 'L', 'XL'],
//         discount: 0
//     },
//     { 
//         id: 3, 
//         name: 'iPhone 15 Pro', 
//         price: 999, 
//         category: 'elctronics',
//         subCategory: 'هواتف',
//         brand: 'Apple',
//         inStock: false, 
//         rating: 4.8, 
//         reviews: 256,
//         tags: ['premium', 'photography', 'ios'],
//         colors: ['black', 'أبيض', 'ذهبي'],
//         sizes: ['128GB', '256GB', '512GB'],
//         discount: 5
//     }
// ];

// class ProductFilter {
//   constructor (products) {
//     this.products = products
//   }

//   filterByPrice(minPrice = 100, maxPrice = Infinity) {
//     return this.products.filter( (product)=> {
//       return product.price >= minPrice && product.price < maxPrice
//     } )
//   }

//   filterByCatigory(category, subCategory) {
//     return this.products.filter( (product) => {
//       const matchedCategory = product.category.toLowerCase() === category.toLowerCase();
//       const matchedSubCategory = product.subCategory ? product.subCategory
//       .toLowerCase()  === subCategory.toLowerCase() : true;
//       return matchedCategory && matchedSubCategory
//     })
//   }
  
//   filterByStock(inStockOnly = true) {
//       return this.products.filter( (product)=> {
//         return  product.inStock === inStockOnly
//       })
//   }

//   filterByRating(rating = 0 ) {
//     return this.products.filter( (product) => {
//       return product.rating >= rating;
//     })
//   }

//   filterByBrand( brands = [])  {
//     if (brands.length === 0) return this.products 
//     return this.products.filter( product => {
//       return  brands.includes(product.brand)
//     })
//   }

//   filterByColor( colors = [] ) {
//     if (colors.length === 0 ) return this.products
//     return this.products.filter( (product)=> {
//         return colors.some( color => {
//          return product.colors.includes(color);
//         } )
//     })
//   }

//   filterBySize( sizes = [] ) {
//     if (sizes.length === 0) return this.products
//     return this.products.filter( (product)=> {
//       return sizes.some( (size)=> {
//         return product.sizes.includes(size)
//       } )
//     }) 
//   }

//   filterByKyWords(Keywords = []) {
//     if (Keywords.length === 0 ) return this.products 
//     return this.products.filter( (product) => {
//       return Keywords.some( keyword => {
//         return product.name.toLowerCase().includes(keyword.toLowerCase()) ||
//         product.tags.includes(keyword.toLowerCase()) 

//       } )
//     })
//   }

// } 
// console.log("tags[0]", products[0].tags.toLocaleLowerCase())

// const productFilter = new ProductFilter(products)

// console.log("filterByPrice", productFilter.filterByPrice(100, 1800))
// console.log("filterByCatigory", productFilter.filterByCatigory('elctronics', 'هواتف'))
// console.log("filterByStock", productFilter.filterByStock())
// console.log("filterByRating", productFilter.filterByRating(4))
// console.log("filterByBrand", productFilter.filterByBrand(['Apple', 'Nike']))
// console.log("filterByColor", productFilter.filterByColor(['black']))
// console.log("filterBySize", productFilter.filterBySize(['128GB','S']))
// console.log("filterByKyWords", productFilter.filterByKyWords(['casual']))

/// bad filters 
// const badFilter = products.filter( (product)=> {
//     product.view = true;
//     return product.inStock
// })
// console.log("bad Filter", badFilter)
// console.log("products", products)

//// use boolean 
// const mixedArray = [1, 0, 'hello', '', null, undefined, false, true, 'world'];

// // إزالة القيم الفارغة
// const truthyValues = mixedArray.filter(Boolean);
// console.log("truthy Values",truthyValues); // [1, 'hello', true, 'world']

// إزالة القيم null و undefined
// const definedValues = mixedArray.filter(value => value != null);
// console.log(definedValues); // [1, 0, 'hello', '', false, true, 'world']

// const numbers = [6, 6, 7, 7, 1, 2, 2, 3, 3, 3, 4, 4, 5];

// // إزالة التكرارات باستخدام filter
// const uniqueNumbers = numbers.filter((num, index, array) => 
//     array.indexOf(num) === index
// );

// console.log("unique Numbers with filter", uniqueNumbers); // [1, 2, 3, 4, 5]

// طريقة أسرع باستخدام Set
// const uniqueWithSet = [...new Set(numbers)];
// console.log("unique With Set",uniqueWithSet); // [1, 2, 3, 4, 5]


//////////////////////////////////////////////////////////////////////////////////////////////////// 
// - Array.indexOf Method

// Array.indexOf() هي دالة في JavaScript تُستخدم للبحث عن عنصر معين داخل المصفوفة وإرجاع فهرس (index) أول ظهور له.

// الصيغة الأساسية:
// array.indexOf(searchElement, fromIndex)
// المعاملات:
// searchElement: العنصر المراد البحث عنه
// fromIndex (اختياري): الفهرس الذي تبدأ منه عملية البحث (افتراضياً 0)
// القيم المُرجعة:
// إذا وُجد العنصر: ترجع فهرس أول ظهور له
// إذا لم يوجد العنصر: ترجع -1
// أمثلة عملية:
// const fruits = ['apple', 'banana', 'orange', 'banana'];

// البحث عن 'banana'
// console.log(fruits.indexOf('banana')); // 1 (أول ظهور)

// البحث عن عنصر غير موجود
// console.log(fruits.indexOf('grape')); // -1

// البحث من فهرس معين
// console.log(fruits.indexOf('banana', 2)); // 3 (ثاني ظهور)

// مع الأرقام
// const numbers = [10, 20, 30, 20, 40];
// console.log(numbers.indexOf(20)); // 1
// console.log(numbers.indexOf(50)); // -1
// استخدامات شائعة:
// const colors = ['red', 'green', 'blue'];

// التحقق من وجود عنصر
// if (colors.indexOf('green') !== -1) {
//     console.log('اللون الأخضر موجود');
// }

// أو باستخدام includes() للتحقق فقط
// if (colors.includes('green')) {
//     console.log('اللون الأخضر موجود');
// }

// إزالة عنصر إذا كان موجوداً
// const index = colors.indexOf('green');
// if (index !== -1) {
//     colors.splice(index, 1);
// }
// ملاحظات مهمة:
// تستخدم مقارنة صارمة (===) للبحث
// تُرجع فهرس أول ظهور فقط، وليس كل الظهورات
// حساسة لنوع البيانات (string ≠ number)
// لا تعمل مع الكائنات المعقدة بشكل مباشر
// مثال على الحساسية لنوع البيانات
// const mixed = [1, '1', 2, '2'];
// console.log(mixed.indexOf(1));   // 0
// console.log(mixed.indexOf('1')); // 1
// هذه الدالة مفيدة جداً للبحث والتحقق من وجود العناصر في المصفوفات.

//// train

// let arr = [1, 1, 2, 3, 4, 'a' ,'a,']

// const resIndexOf = arr.indexOf(2)   // 2
// const resIncludes = arr.includes('a') // true
 

// console.log("res Index Of", resIndexOf); // return index 4
// console.log("resIncludes", resIncludes) // return true

//////////////////////////////////////////////////////////////////////////////////////////////
//  - Array.findIndex Method
// Array.findIndex() هي دالة في JavaScript تُستخدم للبحث عن أول عنصر يحقق شرط معين وإرجاع فهرسه.

// الصيغة الأساسية:
// array.findIndex(callback(element, index, array), thisArg)
// المعاملات:
// callback: دالة تُستدعى لكل عنصر وتُرجع true أو false
// element: العنصر الحالي
// index: فهرس العنصر الحالي
// array: المصفوفة الأصلية
// thisArg (اختياري): قيمة this داخل الـ callback
// القيم المُرجعة:
// إذا وُجد عنصر يحقق الشرط: فهرس أول عنصر
// إذا لم يوجد: -1
// أمثلة عملية:
// const numbers = [5, 12, 8, 130, 44];

// البحث عن أول رقم أكبر من 10
// const index = numbers.findIndex(num => num > 10);
// console.log(index); // 1 (فهرس الرقم 12)

// البحث عن رقم زوجي
// const evenIndex = numbers.findIndex(num => num % 2 === 0);
// console.log(evenIndex); // 2 (فهرس الرقم 8)

// البحث عن شيء غير موجود
// const notFound = numbers.findIndex(num => num > 200);
// console.log(notFound); // -1
// مع الكائنات:
// const users = [
//     { id: 1, name: 'أحمد', age: 25 },
//     { id: 2, name: 'فاطمة', age: 30 },
//     { id: 3, name: 'محمد', age: 22 }
// ];

// البحث عن مستخدم بالاسم
// const userIndex = users.findIndex(user => user.name === 'فاطمة');
// console.log(userIndex); // 1

// البحث عن مستخدم بشرط العمر
// const adultIndex = users.findIndex(user => user.age >= 30);
// console.log(adultIndex); // 1

// البحث عن مستخدم بـ ID
// const userById = users.findIndex(user => user.id === 3);
// console.log(userById); // 2
// استخدامات متقدمة:
// const products = [
//     { name: 'laptop', price: 1000, category: 'electronics' },
//     { name: 'shirt', price: 50, category: 'clothing' },
//     { name: 'phone', price: 800, category: 'electronics' }
// ];

// البحث عن منتج بشروط متعددة
// const expensiveElectronics = products.findIndex(product => 
//     product.category === 'electronics' && product.price > 900
// );
// console.log(expensiveElectronics); // 0

// استخدام الفهرس في الـ callback
// const items = ['a', 'b', 'c', 'd'];
// const middleIndex = items.findIndex((item, index) => index === Math.floor(items.length / 2));
// console.log(middleIndex); // 2
// مقارنة مع indexOf():
// const data = [10, 20, 30, 40];

// indexOf: للبحث عن قيمة محددة
// console.log(data.indexOf(20)); // 1

// findIndex: للبحث بشرط مخصص
// console.log(data.findIndex(x => x > 25)); // 2

// مع الكائنات
// const people = [
//     { name: 'علي', age: 20 },
//     { name: 'سارة', age: 25 }
// ];

// indexOf لن يعمل مع الكائنات
// console.log(people.indexOf({ name: 'علي', age: 20 })); // -1

// findIndex يعمل مع الكائنات
// console.log(people.findIndex(p => p.name === 'علي')); // 0
// استخدامات شائعة:
// const todos = [
//     { id: 1, task: 'شراء الحليب', completed: false },
//     { id: 2, task: 'قراءة الكتاب', completed: true },
//     { id: 3, task: 'الذهاب للعمل', completed: false }
// ];

// العثور على مهمة لتحديثها
// function updateTodo(id, newStatus) {
//     const index = todos.findIndex(todo => todo.id === id);
//     if (index !== -1) {
//         todos[index].completed = newStatus;
//     }
// }

// العثور على أول مهمة غير مكتملة
// const firstIncomplete = todos.findIndex(todo => !todo.completed);
// console.log(firstIncomplete); // 0

// حذف مهمة معينة
// function deleteTodo(id) {
//     const index = todos.findIndex(todo => todo.id === id);
//     if (index !== -1) {
//         todos.splice(index, 1);
//     }
// }
// ملاحظات مهمة:
// يتوقف عند أول عنصر يحقق الشرط
// أكثر مرونة من indexOf() لأنه يقبل دالة تحقق مخصصة
// مفيد جداً مع الكائنات والمصفوفات المعقدة
// يُرجع -1 إذا لم يجد أي عنصر يحقق الشرط
// findIndex() مثالية عندما تحتاج للبحث بشروط معقدة أو عند التعامل مع الكائنات.

// train 
// const numbers = [5, 12, 8, 130, 44];

// const index = numbers.findIndex( (num)=> num > 50)
// console.log("index", index)
// console.log("numbers[index]", numbers[index])

// const users = [
//     { id: 1, name: 'أحمد', age: 25 },
//     { id: 2, name: 'فاطمة', age: 30 },
//     { id: 3, name: 'محمد', age: 22 }
// ]

// const userName = users.findIndex( user => user.name === 'محمد'  )
// console.log(userName)
// console.log(users[userName])

///////////////////////////////////////////////////////////////////////////////////////////
// - Array.lastIndexOf Method 
// Array.lastIndexOf() هي دالة في JavaScript تُستخدم للبحث عن عنصر معين داخل المصفوفة وإرجاع فهرس آخر ظهور له (من النهاية).

// الصيغة الأساسية:
// array.lastIndexOf(searchElement, fromIndex)
// المعاملات:
// searchElement: العنصر المراد البحث عنه
// fromIndex (اختياري): الفهرس الذي تبدأ منه عملية البحث من الخلف (افتراضياً آخر فهرس)
// القيم المُرجعة:
// إذا وُجد العنصر: ترجع فهرس آخر ظهور له
// إذا لم يوجد العنصر: ترجع -1
// أمثلة عملية:
// const numbers = [2, 5, 9, 2, 5, 8, 2];

// البحث عن آخر ظهور للرقم 2
// console.log(numbers.lastIndexOf(2)); // 6

// البحث عن آخر ظهور للرقم 5
// console.log(numbers.lastIndexOf(5)); // 4

// البحث عن عنصر غير موجود
// console.log(numbers.lastIndexOf(10)); // -1

// البحث من فهرس معين
// console.log(numbers.lastIndexOf(2, 4)); // 3 (آخر ظهور قبل الفهرس 4)
// مقارنة مع indexOf():
// const fruits = ['apple', 'banana', 'orange', 'banana', 'grape'];

// indexOf: يجد أول ظهور
// console.log(fruits.indexOf('banana')); // 1

// lastIndexOf: يجد آخر ظهور
// console.log(fruits.lastIndexOf('banana')); // 3

// مع عنصر يظهر مرة واحدة فقط
// console.log(fruits.indexOf('orange')); // 2
// console.log(fruits.lastIndexOf('orange')); // 2 (نفس النتيجة)
// استخدام المعامل fromIndex:
// const letters = ['a', 'b', 'c', 'b', 'a', 'b'];

// البحث من النهاية
// console.log(letters.lastIndexOf('b')); // 5

// البحث من فهرس معين إلى الوراء
// console.log(letters.lastIndexOf('b', 4)); // 3

// البحث من فهرس معين إلى الوراء (قبل الفهرس 3)
// console.log(letters.lastIndexOf('b', 2)); // 1

// فهرس سالب (يُحسب من النهاية)
// console.log(letters.lastIndexOf('a', -2)); // 4
// أمثلة تطبيقية:
// const messages = [
//     'مرحبا',
//     'كيف حالك؟',
//     'أراك لاحقاً',
//     'مرحبا',
//     'وداعاً'
// ];

// العثور على آخر رسالة "مرحبا"
// const lastHelloIndex = messages.lastIndexOf('مرحبا');
// console.log(lastHelloIndex); // 3

// حذف آخر ظهور لعنصر معين
// function removeLastOccurrence(arr, element) {
//     const index = arr.lastIndexOf(element);
//     if (index !== -1) {
//         arr.splice(index, 1);
//     }
//     return arr;
// }

// const colors = ['red', 'blue', 'green', 'blue', 'yellow'];
// removeLastOccurrence(colors, 'blue');
// console.log(colors); // ['red', 'blue', 'green', 'yellow']
// مع أنواع البيانات المختلفة:
// مع الأرقام
// const nums = [1, 2, 3, 2, 1];
// console.log(nums.lastIndexOf(1)); // 4

// مع النصوص
// const words = ['hello', 'world', 'hello'];
// console.log(words.lastIndexOf('hello')); // 2

// مع القيم المنطقية
// const flags = [true, false, true, false];
// console.log(flags.lastIndexOf(true)); // 2

// حساسية نوع البيانات
// const mixed = [1, '1', 2, '1', 1];
// console.log(mixed.lastIndexOf(1)); // 4
// console.log(mixed.lastIndexOf('1')); // 3
// دالة مساعدة للعثور على جميع الفهارس:
// function findAllIndexes(arr, element) {
//     const indexes = [];
//     let index = arr.indexOf(element);
    
//     while (index !== -1) {
//         indexes.push(index);
//         index = arr.indexOf(element, index + 1);
//     }
    
//     return indexes;
// }

// const data = [1, 2, 3, 2, 1, 2];
// console.log(findAllIndexes(data, 2)); // [1, 3, 5]

// آخر فهرس باستخدام lastIndexOf
// console.log(data.lastIndexOf(2)); // 5
// استخدامات عملية:
// const history = [
//     'صفحة رئيسية',
//     'منتجات',
//     'تفاصيل منتج',
//     'عربة التسوق',
//     'منتجات',
//     'تفاصيل منتج'
// ];

// العثور على آخر زيارة لصفحة معينة
// function getLastVisit(page) {
//     const index = history.lastIndexOf(page);
//     return index !== -1 ? `آخر زيارة في الموضع ${index}` : 'لم يتم العثور على الصفحة';
// }

// console.log(getLastVisit('منتجات')); // "آخر زيارة في الموضع 4"

// إزالة العناصر المكررة من النهاية
// function removeDuplicatesFromEnd(arr) {
//     const result = [];
//     const seen = new Set();
    
//     for (let i = arr.length - 1; i >= 0; i--) {
//         if (!seen.has(arr[i])) {
//             seen.add(arr[i]);
//             result.unshift(arr[i]);
//         }
//     }
    
//     return result;
// }

// const duplicates = [1, 2, 3, 2, 1, 4];
// console.log(removeDuplicatesFromEnd(duplicates)); // [3, 2, 1, 4]
// ملاحظات مهمة:
// يبحث من النهاية إلى البداية
// يستخدم مقارنة صارمة (===)
// يُرجع فهرس آخر ظهور وليس أول ظهور
// مفيد عند التعامل مع السجلات أو التاريخ
// يمكن استخدامه مع fromIndex سالب للبحث من نهاية معينة
// lastIndexOf() مفيدة خاصة عند التعامل مع البيانات التي تحتوي على تكرارات وتريد العثور على آخر ظهور للعنصر.

///////////////////////////////////////////////////////////////////////////////////////////////////////
// - Array.find Method
// Array.find() هي دالة في JavaScript تُستخدم للبحث عن أول عنصر يحقق شرط معين وإرجاع العنصر نفسه (وليس فهرسه).
// الصيغة الأساسية:
// javascriptarray.find(callback(element, index, array), thisArg)
// المعاملات:

// callback: دالة تُستدعى لكل عنصر وتُرجع true أو false

// element: العنصر الحالي
// index: فهرس العنصر الحالي
// array: المصفوفة الأصلية
// thisArg (اختياري): قيمة this داخل الـ callback

// القيم المُرجعة:
// إذا وُجد عنصر يحقق الشرط: العنصر نفسه
// إذا لم يوجد: undefined

// أمثلة عملية:

// const numbers = [5, 12, 8, 130, 44];

// البحث عن أول رقم أكبر من 10
// const number = numbers.find( num => num > 10 )
// console.log(number)

// البحث عن رقم زوجي
// const evenNumber =  numbers.find( num => num % 2 == 0  )
// console.log(evenNumber)

// const unExisted = numbers.find( num => num >5555)
// console.log(unExisted) // umdefined

// مع الكائنات:

// const users = [
//     { id: 1, name: 'أحمد', age: 25, active: true },
//     { id: 2, name: 'فاطمة', age: 30, active: false },
//     { id: 3, name: 'محمد', age: 22, active: true }
// ];

// البحث عن مستخدم بالاسم
// const userByName = users.find( user => user.name === "محمد" )
// console.log(userByName)

// البحث عن مستخدم نشط
// const activeUser = users.find(user => user.active);
// console.log(activeUser); // { id: 1, name: 'أحمد', age: 25, active: true }

// البحث عن مستخدم بـ ID
// const userById = users.find(user => user.id === 3);
// console.log(userById); // { id: 3, name: 'محمد', age: 22, active: true }

// استخدامات متقدمة: 
// const products = [
//     { name: 'laptop', price: 1000, category: 'electronics', inStock: true },
//     { name: 'shirt', price: 50, category: 'clothing', inStock: false },
//     { name: 'phone', price: 800, category: 'electronics', inStock: true }
// ];

// const availabeElectronics = products.find()