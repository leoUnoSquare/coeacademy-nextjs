'use client';
import React from 'react'
import Layout from './layout'
import Image from 'next/image';


type AlbumType = {
  id: number,
  albumId: number,
  title: string,
  url: string,
  thumbnailUrl: string
}

interface AlbumProps {
  album: AlbumType
}

const album = ({ album }: AlbumProps) => {
  return (
    <Layout>
      <div className="mt-[80px]">
        <div className="w-full">
          <div className="flex justify-center gap-4">
            <Image src={album.url} height={600} width={600} alt={album.title} />
            <div className="flex-col">
              <p>  <strong>Title:</strong> {album.title}</p>
              <p>  <strong>Url:</strong> {album.url}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos')
  const albums = await res.json()

  const paths = albums.map((album: AlbumType) => ({
    params: { id: album.id.toString() },
  }))

  return { paths, fallback: false }
}


export async function getStaticProps({ params }: { params: { id: string } }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${params.id}`)
  const album = await res.json()

  return { props: { album } }
}

export default album