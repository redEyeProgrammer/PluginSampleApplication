//
//  MyHybridPlugin.m
//  DemoApp
//
//  Created by redEyeProgrammer on 9/26/17.
//

#import "MyHybridPlugin.h"
#import "MainViewController.h"
#import "MyTableViewController.h"

@implementation MyHybridPlugin
-(void)addBookmark:(CDVInvokedUrlCommand*) command {
    NSString* bookmark = [command.arguments objectAtIndex:0];
    
    if(bookmark) {
        NSLog(@"addBookmark %@", bookmark);
        MainViewController* mvc = (MainViewController*)[self viewController];
        
        MyTableViewController* tvc = (MyTableViewController*)mvc.tabBarController.viewControllers[1];
        [tvc.bookmarks addObject:bookmark];
        [tvc.tableView reloadData];
        CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    } else {
        CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }
}

@end
