//
//  CalendarManager.m
//  ReactNativeLearn
//
//  Created by runlong on 2019/8/28.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "CalendarManager.h"
#import <React/RCTLog.h>
#import <React/RCTConvert.h>
@implementation CalendarManager
{
  bool hasListeners;
}

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name passString:(NSString *)stringData)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, stringData);
}

RCT_EXPORT_METHOD(passInt:(NSString *)name intData:(NSInteger)data)
{
  RCTLogInfo(@"Pretending to create an event %@ at %ld", name, data);
}



RCT_EXPORT_METHOD(findEvents:(RCTResponseSenderBlock)callback)
{
  NSArray *events = @[@1,@2,@3];
  callback(@[[NSNull null], events]);
}

RCT_EXPORT_METHOD(useRNMethod)
{
    [self sendEventToJs:@"dataFromIOS"];
}


//Sending Events to JavaScript
- (NSArray<NSString *> *)supportedEvents
{
  return @[@"EventReminder"];
}

-(void)sendEventToJs:(NSString *)str{
  if (hasListeners){
    //原生调用RN
    [self sendEventWithName:@"EventReminder" body:@{@"name": str}];
  }
}


// Will be called when this module's first listener is added.
-(void)startObserving {
  hasListeners = YES;
  // Set up any upstream listeners or background tasks as necessary
}

// Will be called when this module's last listener is removed, or on dealloc.
-(void)stopObserving {
  hasListeners = NO;
  // Remove upstream listeners, stop unnecessary background tasks
}

@end
