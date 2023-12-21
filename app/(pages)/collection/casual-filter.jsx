import CardType from '../../../components/card/card-type'

const CasualFilter = () => {
  return (
    <div className="flex justify-center items-center pt-[37px] pb-[27px]">
      <CardType
        category={{
          image:
            'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80,format=auto/uploads/September2023/Refdfdctangle_178.png',
          imageHover:
            'https://mcdn.coolmate.me/image/September2023/mceclip0_81.jpg',
          type: 'Áo các loại',
          description: 'Áo thun, áo Polo và các áo khác'
        }}
      />
      <CardType
        category={{
          image:
            'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80,format=auto/uploads/September2023/Rectanffffgle_178.png',
          imageHover:
            'https://media2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/November2023/23CMCW.QD006.s.1_71.jpg',
          type: 'Quần các loại',
          description:
            'Áo thun, áo Polo và các áo khácQuần shorts, Jogger, Kaki và Jeans'
        }}
      />
      <CardType
        category={{
          image:
            'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80,format=auto/uploads/September2023/Rectangleftrer_178.png',
          imageHover:
            'https://media2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/May2023/_CMM8524.jpg',
          type: 'Phụ kiện các loại',
          description: 'Tất/vớ, mũ và phụ kiện khác'
        }}
      />
    </div>
  )
}

export default CasualFilter
