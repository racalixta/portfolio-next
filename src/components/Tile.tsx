interface TileProps {
  item: Object,
}

export const Tile = ({ item }: TileProps) => {
  return (
    
    <div className="grid grid-cols-1 w-full md:grid-cols-3 gap-4 ">
      
        {Object.keys(item).map((key) => (
          <div className="flex flex-wrap gap-2 bg-violet-600 rounded-lg justify-center py-4 px-4 text-lg">
            <h2 className="font-semibold">
              <i className="bi bi-check2-circle mr-1"></i>
              {item[key][0]}:
            </h2>
            <p>{item[key][1]}</p>
          </div>
        ))}
        
    </div>
  )
}