import React from 'react';

export default function Admin() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend className="text-2xl font-bold text-center pt-8">
          새로운 제품 등록하기
        </legend>
        <div className="mb-8 ">
          <img src="" alt="" />
        </div>
        <ul className="flex flex-col gap-y-4">
          <li className="flex gap-x-3 items-center">
            <label className="w-20" htmlFor="productImg">
              제품사진
            </label>
            <input
              type="file"
              className="border h-14 w-full p-2 rounded-lg"
              name="productImg"
              id="productImg"
            />
          </li>
          <li className="flex gap-x-3 items-center">
            <label className="w-20" htmlFor="productNm">
              제품명
            </label>
            <input
              type="text"
              className="border h-14 w-full p-2 rounded-lg"
              name="productNm"
              id="productNm"
              placeholder="제품명"
            />
          </li>
          <li className="flex gap-x-3 items-center">
            <label className="w-20" htmlFor="productPrice">
              가격
            </label>
            <input
              type="number"
              className="border h-14 w-full p-2 rounded-lg"
              name="productPrice"
              id="productPrice"
              placeholder="가격"
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
            />
          </li>
          <li className="flex gap-x-3 items-center">
            <label className="w-20" htmlFor="productDescription">
              제품 설명
            </label>
            <input
              type="text"
              className="border h-14 w-full p-2 rounded-lg"
              name="productDescription"
              id="productDescription"
              placeholder="제품 설명"
            />
          </li>
          <li className="flex gap-x-3 items-center">
            <label className="w-20" htmlFor="productOptions">
              옵션
            </label>
            <input
              type="text"
              className="border h-14 w-full p-2 rounded-lg"
              name="productOptions"
              id="productOptions"
              placeholder="옵션"
            />
          </li>
        </ul>
      </fieldset>

      <button type="submit" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 rounded-lg text-md px-5 py-4 mt-5 text-center font-bold w-full">제품 등록하기</button>
    </form>
  );
}

function inputText() {
  return <div></div>;
}
