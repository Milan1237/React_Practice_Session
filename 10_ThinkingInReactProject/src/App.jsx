import { useState } from 'react'
import './App.css'

function ProductCategoryRow({category}){

  return(
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
    
  )

}

function ProductRow({product}){
  let name = product.stocked ? product.name : <span style={{color: 'red'}}>{product.name}</span> ;

  return(
    <tr >
      <td>
        <p className=' w-[200px]'>
        {name}
        </p>
      </td>
      <td>
        {product.price}
      </td>

    </tr>
  )
}

function ProductTable({product , text , stock}){

  if(stock){
   product =  product.filter((value)=>{
    if(value.stocked) return value ;
   })
  }

  let rows = [];
  let prevCategory = null;
  
  product.map((pro)=>{

    if(pro.name.toLowerCase().indexOf(text.toLowerCase()) === -1){
      return ;
    }

    if(prevCategory !== pro.category){
        let row = <ProductCategoryRow category={pro.category} key={pro.category}/>
        rows.push(row);
    }

    let productRow = <ProductRow product={pro} key={pro.name}/>
    rows.push(productRow);
    prevCategory = pro.category;
  })


  return(
    <>
    <div className='w-full'>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          
            {rows}
          
        </tbody>
      </table>

    </div>
    </>
  )
}

function SearchBar({stock , handleStock , text , handleText }){

  return(
    <>
    <form action="#" className=' m-4'>
      <input id='q' name='q' type="text" value={text} onChange={(e)=>handleText(e.target.value)} placeholder='Search Products' className=' outline-1 border-black border-x-[1px] border-y-[1px] m-2'/>
      <div className=' flex m-2'>
      <input id='st' name='st' checked={stock} onChange={(e)=>handleStock(e.target.checked)} type="checkbox" className=' mr-2' /> 
      <p>Only Show Product In Stock</p>
      </div>
    </form>
    </>
  )
}

export default function FilterableProduct() {
  let Product = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ]

  const [stock , setStock] = useState(false);
  const [filterText , setFilterText] = useState("");

  

  return (
    

    <>
    <div className=' w-[300px]'>
      <SearchBar stock={stock} handleStock={setStock} text={filterText} handleText={setFilterText}/>
      <ProductTable product={Product} text={filterText} stock={stock}/>
      </div>
    </>
  )
}


