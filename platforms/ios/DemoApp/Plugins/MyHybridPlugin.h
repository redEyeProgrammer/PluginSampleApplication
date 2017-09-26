//
//  MyHybridPlugin.h
//  DemoApp
//
//  Created by redEyeProgrammer on 9/26/17.
//

#import <Cordova/CDVPlugin.h>

@interface MyHybridPlugin : CDVPlugin
- (void)addBookmark:(CDVInvokedUrlCommand*) command;

@end
