export default function TestPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="group published">
        <p>Item 1</p>
        <p>Item 2</p>
        <p className="group-[:nth-of-type(even)_&:last-child]:text-blue-500">Item 3</p>
      </div>
      <div className="group">
        <p>Item 1</p>
        <p>Item 2</p>
        <p className="group-[:nth-of-type(even)_&:last-child]:text-blue-500">Item 3</p>
      </div>
      <div className="group">
        <p className="group-[:nth-of-type(even)_&:last-child]:text-blue-500">Item 3</p>
        <p>Item 1</p>
        <p>Item 2</p>
      </div>
      <div className="group">
        <p>Item 1</p>
        <p>Item 2</p>
        <p className="group-[:nth-of-type(even)_&:last-child]:text-blue-500">Item 3</p>
      </div>
    </div>
  );
}

