//
//  RNBridge.swift
//  ReactNativeLearn
//
//  Created by runlong on 2019/8/28.
//  Copyright © 2019 Facebook. All rights reserved.
//

import UIKit

@objc(RNBridge)
class RNBridge: NSObject {
  @objc(addEvent:location:date:)
  func addEvent(name: String, location: String, date: NSNumber) -> Void {
    // Date is ready to use!
    print("name:\(name),location:\(location),date:\(date)")
  }
  
  @objc
  func constantsToExport() -> [String: Any]! {
    return ["someKey": "someValue"]
  }
}

