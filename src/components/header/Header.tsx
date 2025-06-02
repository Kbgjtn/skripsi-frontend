'use client'
import React, { useState } from "react";

export default function Header() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [message, setMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select an image first')
      return
    }

    const formData = new FormData()
    formData.append('image', selectedFile)

    try {
      const res = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      })

      const data = await res.json()
      setMessage(data.message || 'Upload complete')
    } catch (err) {
      console.error(err)
      setMessage('Upload failed')
    }
  }
  return (
    <div className="relative bg-[url('/bg-leaves.webp')] bg-cover bg-center text-white h-screen">
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-48 flex flex-col md:flex-row items-center gap-12 h-full justify-center">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Unggah.
            <br />
            Analisis.
            <br />
            Panen Sehat.
          </h1>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center gap-6">
          <p className="text-lg md:text-xl text-center">
            Gunakan teknologi visual cerdas untuk tahu kondisi tanaman Anda.
            Cukup unggah gambar atau video!
          </p>
          <input type="file" accept="image/*" onChange={handleChange} className="bg-white text-green-800 font-semibold px-8 py-3 rounded-full hover:cursor-pointer flex w-[20rem] justify-between text-center hidden"/>
          <button onClick={handleUpload} className="bg-white text-green-800 font-semibold px-8 py-3 rounded-full hover:cursor-pointer">
            Unggah File Di Sini
          </button>
          <p className="mt-4">{message}</p>
        </div>
      </div>
    </div>
  );
}
