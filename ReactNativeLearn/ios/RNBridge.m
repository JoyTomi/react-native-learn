#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(RNBridge, NSObject)

RCT_EXTERN_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(nonnull NSNumber *)date)

RCT_EXPORT_METHOD(constantsToExport:(RCTResponseSenderBlock)callback)
{
  NSArray *events = @[@21,@2,@3];
  callback(events);
}

@end
