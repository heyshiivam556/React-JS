import React from 'react'

// function Card(props) {
function Card({name = 'no name', hashId}) { //we can set default value if no value is passed
  // console.log('propss',props);
  
  return (
   <>
   <div className="w-60 mt-4 flex flex-col rounded-xl bg-black min-h-19rem ">
      <div>
        <img
          src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
          alt="test"
          className="object-cover object-center rounded-t-xl"
        />
      </div>
      <div className="flex flex-col py-3 px-3 pb-10">
        <div className="flex justify-between ">
          {/* to set a default value in case no value is passed (inline way) */}
          <h4 className="font-bold ">{name || 'no name'}</h4>
          <h3>599</h3>
        </div>
        <div className="flex  justify-between">
          <p>#{hashId}</p>
          <p>0.01</p>
        </div>
      </div>
    </div>
   </>
  )
}

export default Card