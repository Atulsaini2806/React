# I am learning React.

# what does the parcel do:-
-> Dev Build
-> Local Sever
-> HMR = Hot Module Replacement
-> File watching Algoritm - written in c++
-> Caching - Faster Builds
-> Image Optimization
-> Minification
-> Bundling
-> Compress
-> Consistent Hashing
-> Code Spliting
-> Differential Bundling - also support older browser 
-> Error Handling
-> Also Host Our App into HTTPs
-> Tree Shaking - remove unused code
-> Different dev and prod bundles



# Food Ordering App
**
 * Header
 *  - Logo
 *  - Nav Items
 * Cart
 * -search
 * -RestaurantContainer
 *   - Restaurant Card
 *     - Image
 *       - Name of resto,cuisines,rating, cost for two,
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */


# Two types of Export/Import:-

=> Default Export/Import:
    export default Component;
    import Component from "path";


=> Named Export/Import:(when we have to export multiple thing from one file then we use Named Export/Import)
   export const Component;
   import {Component} from "path";


# React Hooks:-
(Normal JS utility function)
- usrState():-Superpowerful State Variables
- useEffect()


# 2 types of Rounting in web app:-
- Client Side Routing
- Server side Routing



# class based componet life cycle:-
#  when we have only one child-
- Parent constructor
- Parent render

   - child constructor
   - child render
   - child componentDidMount

- Parent componentDidMount


# whem we have two or more then two children:-
- Parent constructor
- Parent render

  - First child constructor
  - First child render

   /due to reconsilization process
  - Second child constructor
  - Second child render

   <DOM UPDATED  IN SINGLE BATCH>
   - First child componentDidMount
   - Second child componentDidMount

- Parent componentDidMount