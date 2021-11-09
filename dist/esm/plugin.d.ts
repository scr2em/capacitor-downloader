import { IDownloader, IStatusCode, DownloadOptions, DownloadEventData, Options, TimeOutOptions } from './definitions';
export declare class Downloader implements IDownloader {
    initialize(): void;
    init(): void;
    static setTimeout(options: TimeOutOptions): any;
    getStatus(options: Options): Promise<IStatusCode>;
    createDownload(options: DownloadOptions): Promise<any>;
    cancel(options: Options): any;
    start(options: Options, progress?: Function): Promise<DownloadEventData>;
    pause(options: Options): Promise<any>;
    resume(options: Options): Promise<any>;
    getPath(options: Options): Promise<string>;
}
