import React, { useState } from 'react';
import Button from '../components/ui/Button';
import { uploadImage } from '../api/uploader';
import { addNewProduct } from '../api/firebase';

export default function Admin() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    uploadImage(file)
      .then((url) => {
        addNewProduct(product, url).then(() => {
          setSuccess('성공적으로 제품이 추가되었습니다.');
          setTimeout(() => {
            setSuccess(null);
          }, 4000);
        });
      })
      .finally(() => setIsUploading(false));
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };

  return (
    <section>
      <h2 className="text-2xl font-bold text-center pt-8">
        {'<'} 새로운 제품 등록하기 {'>'}
      </h2>
      {success && <p className="text-center mt-4 text-lg underline text-rose-500">✅ {success}</p>}
      <div className="mb-8 mt-8">
        {file && (
          <img
            className="w-96 mx-auto"
            src={URL.createObjectURL(file)}
            alt="local file"
          />
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend className="sr-only">새로운 제품 등록하기 폼</legend>
          <ul className="flex flex-col gap-y-4">
            <li className="flex gap-x-3 items-center">
              <label className="w-20" htmlFor="file">
                제품사진
              </label>
              <input
                type="file"
                accept="image/*"
                className="border h-14 w-full p-2 rounded-lg"
                name="file"
                id="file"
                required
                onChange={handleChange}
              />
            </li>
            <li className="flex gap-x-3 items-center">
              <label className="w-20" htmlFor="title">
                제품명
              </label>
              <input
                type="text"
                className="border h-14 w-full p-2 rounded-lg"
                name="title"
                id="title"
                placeholder="제품명"
                value={product.title ?? ''}
                onChange={handleChange}
                required
              />
            </li>
            <li className="flex gap-x-3 items-center">
              <label className="w-20" htmlFor="price">
                가격
              </label>
              <input
                type="number"
                className="border h-14 w-full p-2 rounded-lg"
                name="price"
                id="price"
                placeholder="가격"
                value={product.price ?? ''}
                required
                onChange={handleChange}
              />
            </li>
            <li className="flex gap-x-3 items-center">
              <label className="w-20" htmlFor="category">
                카테고리
              </label>
              <input
                type="text"
                className="border h-14 w-full p-2 rounded-lg"
                name="category"
                id="category"
                placeholder="카테고리"
                value={product.category ?? ''}
                required
                onChange={handleChange}
              />
            </li>
            <li className="flex gap-x-3 items-center">
              <label className="w-20" htmlFor="content">
                제품 설명
              </label>
              <input
                type="text"
                className="border h-14 w-full p-2 rounded-lg"
                name="content"
                id="content"
                placeholder="제품 설명"
                value={product.content ?? ''}
                required
                onChange={handleChange}
              />
            </li>
            <li className="flex gap-x-3 items-center">
              <label className="w-20" htmlFor="options">
                옵션
              </label>
              <input
                type="text"
                className="border h-14 w-full p-2 rounded-lg"
                name="options"
                id="options"
                value={product.options ?? ''}
                placeholder="옵션들(콤마(,)로 구분)"
                required
                onChange={handleChange}
              />
              œ
            </li>
          </ul>
        </fieldset>

        <button
          type="submit"
          className="text-gray-900 bg-rose-300 focus:outline-none hover:bg-rose-400 rounded-lg text-md px-5 py-4 mt-5 text-center font-bold w-full disabled:bg-slate-300"
          disabled={isUploading}
        >
          {isUploading ? '업로드중...⛱' : '제품 등록하기'}
        </button>
      </form>
    </section>
  );
}
