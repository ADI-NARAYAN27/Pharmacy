import { FileText, ImagePlus, UploadCloud } from 'lucide-react';

function FileDropzone({ file, isDragging, previewUrl, onDragOver, onDragLeave, onDrop, onSelect }) {
  const handleInputChange = (event) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      onSelect(selectedFile);
    }
  };

  return (
    <div
      className={`rounded-[2rem] border-2 border-dashed p-8 text-center transition ${
        isDragging
          ? 'border-brand-500 bg-brand-50'
          : 'border-slate-200 bg-white hover:border-brand-300 hover:bg-slate-50'
      }`}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-soft">
        <UploadCloud className="h-8 w-8" />
      </div>
      <h3 className="mt-5 text-2xl font-semibold text-slate-900">Drag & drop prescription</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        Upload JPG, PNG, or PDF files for faster prescription validation.
      </p>

      <label className="button-primary mt-6 cursor-pointer">
        Choose File
        <input className="hidden" onChange={handleInputChange} type="file" />
      </label>

      {file && (
        <div className="mt-8 rounded-3xl bg-slate-50 p-5 text-left">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-700">Preview</p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
            {previewUrl && file.type.startsWith('image/') ? (
              <img alt={file.name} className="h-28 w-28 rounded-2xl object-cover" src={previewUrl} />
            ) : (
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white text-brand-600">
                <FileText className="h-10 w-10" />
              </div>
            )}
            <div className="space-y-1">
              <p className="font-semibold text-slate-900">{file.name}</p>
              <p className="text-sm text-slate-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              <p className="inline-flex items-center gap-2 rounded-full bg-accent-50 px-3 py-1 text-sm font-semibold text-accent-700">
                <ImagePlus className="h-4 w-4" />
                Ready to upload
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FileDropzone;
