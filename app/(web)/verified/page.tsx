"use client";
import { useDropzone } from "react-dropzone";
import React, { useState } from "react";

export type UploadProps = {
  path: string;
  preview: string;
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}

const verificationCriteria = [
  "Kartu Tanda Mahasiswa (KTM) / Kartu Tanda Dosen (KTD) yang masih berlaku",
  "Screenshot Siakad Politeknik Negeri Malang",
  "Bukti kegiatan akademik",
]

const Upload: React.FC = () => {
  const [files, setFiles] = useState<UploadProps[]>([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map((file: any) => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const thumbnail = files.map((file) => (
    <div key={file.name} className="flex flex-col items-center justify-center">
      <img src={file.preview} className="w-auto h-32" />
      <p className="text-sm text-gray-400">{file.name}</p>
    </div>
  ));

  return (
    <section className="flex flex-col gap-6 flex-wrap mt-16 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-200 text-center">Verifikasi Akun Mahasiswa / Dosen Politeknik Negeri Malang</h1>
      <div {...getRootProps({ className: "flex flex-col flex-1 p-20 bg-slate-500/30 border-2 border-dashed border-slate-500/50 rounded-2xl cursor-pointer" })}>
        <input {...getInputProps()} />
        <p className="text-white text-sm font-semibold text-center"> Upload file </p>
      </div>
      <div>
        <h1 className="text-xl font-bold text-gray-200">Kriteria Verifikasi</h1>
        <span className="text-xs text-red-300">* pilih salah satu</span>
        <ul className="ml-4 list-disc list-inside text-gray-400 mt-2">
          {verificationCriteria.map((criteria, index) => (
            <li key={index}>{criteria}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-row flex-wrap gap-4 mt-4">
        {thumbnail}
      </div>

      <div className="flex flex-row gap-4">
        <button className="btn btn-primary">Kirim</button>
      </div>
    </section>
  )


}

export default Upload;