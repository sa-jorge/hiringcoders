import { readFile, writeFile } from 'fs';
import { resolve } from 'path';

function createRepository (name) {
    const path = resolve(__dirname, `../../data/${name}.json`);


    return {
        read: () => new Promise((resolve, reject) => {
           readFile(path, (error, data) => {
               if (error) {
                   reject(error);
                   return;
               }
               resolve(JSON.parse(data));
           });
        }),

        write: (data) => new Promise (() => {
            writeFile(path, JSON.stringify(data), (error, data) =>{
                if (error) {
                    reject(error);
                    return;
                }

                resolve();
            })
        }),
    }
}

export default createRepository;