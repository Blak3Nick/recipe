
import {LogService} from "./log.service";
import {Injectable, EventEmitter} from "@angular/core";

@Injectable()
export class DataService {

  constructor(private logService: LogService) {
  }
  pushData = new EventEmitter<string>();
  private data: string[] = [];

  addData(input: string) {
    this.data.push(input);
    this.logService.writeToLog('This was written' + input);
  }
  getData() {
    return this.data;
  }
}
