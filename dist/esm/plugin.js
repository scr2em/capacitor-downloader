var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Plugins } from '@capacitor/core';
const { DownloaderPlugin } = Plugins;
export class Downloader {
    initialize() {
        DownloaderPlugin.initialize();
    }
    init() {
        this.init();
    }
    static setTimeout(options) {
        return DownloaderPlugin.setTimeout(options);
    }
    getStatus(options) {
        return DownloaderPlugin.getStatus(options);
    }
    createDownload(options) {
        return DownloaderPlugin.createDownload(options);
    }
    cancel(options) {
        return DownloaderPlugin.cancel(options);
    }
    start(options, progress) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            DownloaderPlugin.start(options, (data, error) => {
                if (!error) {
                    if (data['status'] != null) {
                        resolve(data);
                    }
                    else {
                        progress(data);
                    }
                }
                else {
                    reject({
                        status: 'error',
                        message: error
                    });
                }
            });
        }));
    }
    pause(options) {
        return DownloaderPlugin.pause(options);
    }
    resume(options) {
        return DownloaderPlugin.resume(options);
    }
    getPath(options) {
        return DownloaderPlugin.getPath(options);
    }
}
//# sourceMappingURL=plugin.js.map