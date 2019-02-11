

type TCallBack<T = any> = (err: Error | null, result: T) => void


declare module "canvas" {
  export function createCanvas(width?: number, height?: number): Canvas
  export function loadImage(url: string): Promise<Image>

  interface IJpegConfig {
    quality?: number
    progressive?: boolean
    chromaSubsampling?: boolean
  }
  
  interface IPngConfig {
    compressionLevel?: number
    filters?: number
    palette?: number
    backgroundIndex?: number
    resolution?: number
  }
  
  interface IPdfConfig {
    title?: string
    author?: string
    subject?: string
    keywords?: string
    creator?: string
    creationDate?: Date
    modDate?: Date
  }

  type t = HTMLCanvasElement

  export class Image {
    src: string | Buffer

    width: number
    height: number

    onload: () => void
    onerror: () => void

    addEventListener(event: 'load', listener: () => void)
    addEventListener(event: 'error', listener: () => void)
    removeEventListener(event: 'load', listener: () => void)
    removeEventListener(event: 'error', listener: () => void)

    static MODE_MIME: number
    static MODE_IMAGE: number
  }

  export interface Canvas {
    width: number
    height: number

    constructor(width: number, height: number)

    getContext(type: '2d'): Context

    toBuffer(): Buffer
    toBuffer(mime: 'image/jpeg', config?: IJpegConfig): Buffer
    toBuffer(mime: 'image/png', config?: IPngConfig): Buffer
    toBuffer(mime: 'application/pdf', config?: IPdfConfig): Buffer

    toBuffer(callback: TCallBack<Buffer>): void
    toBuffer(callback: TCallBack<Buffer>): void
    toBuffer(callback: TCallBack<Buffer>): void
    toBuffer(callback: TCallBack<Buffer>): void

    toDataURL(type?: string, quality?: any): string;
    toBlob(callback: (blob: Blob | null) => void, type?: string, quality?: any): void;

    prototype: Canvas
    new(): Canvas
  }

  export interface Context extends 
    CanvasState, 
    CanvasTransform, 
    CanvasCompositing, 
    CanvasImageSmoothing, 
    CanvasFillStrokeStyles, 
    CanvasShadowStyles, 
    CanvasFilters, 
    CanvasRect, 
    CanvasDrawPath, 
    CanvasUserInterface, 
    CanvasText, 
    CanvasImageData, 
    CanvasPathDrawingStyles, 
    CanvasTextDrawingStyles, 
    CanvasPath   
  {
    readonly canvas: Canvas
    drawImage(image: Image, dx: number, dy: number): void;
    drawImage(image: Image, dx: number, dy: number, dw: number, dh: number): void;
    drawImage(image: Image, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;
  }
}