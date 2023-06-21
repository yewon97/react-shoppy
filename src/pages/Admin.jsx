import React, { useState } from 'react';

export default function Admin() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    const { name, value, files } = e.target;
		console.log('files: ', files);
    if (name === 'file') {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };

  return (
    <section>
      <h2 className="text-2xl font-bold text-center pt-8">
        새로운 제품 등록하기
      </h2>
      <div className="mb-8 mt-8">
				{
					file && <img className="w-96 mx-auto" src={URL.createObjectURL(file)} alt="local file" />
				}
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
                placeholder="옵션(,로 구분)"
                required
                onChange={handleChange}
              />
              œ
            </li>
          </ul>
        </fieldset>

        <button
          type="submit"
          className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 rounded-lg text-md px-5 py-4 mt-5 text-center font-bold w-full"
        >
          제품 등록하기
        </button>
      </form>
    </section>
  );
}

function inputText() {
  return <div></div>;
}
