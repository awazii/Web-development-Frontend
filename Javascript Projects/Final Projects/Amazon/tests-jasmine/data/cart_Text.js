import{addtocart,cart,loadingcart} from '../../data/cart.js'
describe("Checking Addtocart Function",()=>{
    let mockEvent,button;
    beforeEach(()=>{
        mockEvent = {
            target: {
              closest: jasmine.createSpy('closest').and.returnValue ({
                querySelector: jasmine.createSpy('querySelector').and.returnValue({
                  firstElementChild: { value: '2' },
                }),
              }),
            },
          };
          button = { dataset: { productId: '101' } };
    })
    it('Check if the new item is added to the cart',()=>{
      spyOn(localStorage,'setItem')
      spyOn(localStorage,'getItem').and.returnValue(JSON.stringify([]));
      loadingcart() 
        addtocart(mockEvent, button);
         expect(cart.length).toBe(1);
         expect(cart[0]).toEqual({id:'101',quantity:2,deliveryid:'1'});
         expect(localStorage.setItem).toHaveBeenCalledTimes(1)
         console.log(cart)
    })
    it('Check if the quantity increases if same item is added to the cart',()=>{
      spyOn(localStorage,'setItem')
      spyOn(localStorage,'getItem').and.returnValue(JSON.stringify([{id:'101',quantity:5,deliveryid:'1'}]));
      loadingcart() 
        addtocart(mockEvent, button);
         expect(cart.length).toBe(1);
         expect(cart[0]).toEqual({id:'101',quantity:7,deliveryid:'1'});
         expect(localStorage.setItem).toHaveBeenCalledTimes(1)
         console.log(cart)
    })
    it('Check if more then one  items can be added to the cart',()=>{
      spyOn(localStorage,'setItem')
      spyOn(localStorage,'getItem').and.returnValue(JSON.stringify([{id:'102',quantity:5,deliveryid:'1'}]));
      loadingcart() 
        addtocart(mockEvent, button);
         expect(cart.length).toBe(2);
         expect(localStorage.setItem).toHaveBeenCalledTimes(1)
         console.log(cart)
    })
})